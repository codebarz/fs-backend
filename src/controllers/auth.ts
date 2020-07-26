import sql from '../config/sql';
import joi from '@hapi/joi';
import bcrypt from 'bcrypt';
import { User } from '../typings/tables';
import tokenEncoder from '../utils/tokenEncoder';
import generateMessageTemplate from '../utils/generateMessageTemplate';
import sendMail from '../utils/sendMail';

const signUpSchema = joi
  .object()
  .keys({
    user_name: joi
      .string()
      .required()
      .label('username'),
    email: joi
      .string()
      .email()
      .required()
      .lowercase(),
    password: joi
      .string()
      .min(6)
      .required(),
    avatar_url: joi
      .string()
      .uri({ scheme: 'https' })
      .required()
      .label('avatarURL'),
  })
  .rename('username', 'user_name')
  .rename('avatarURL', 'avatar_url');

export async function signup(data: Record<string, unknown>) {
  const {
    user_name,
    email,
    password,
    ...rest
  } = await signUpSchema.validateAsync(data, {
    abortEarly: false,
    stripUnknown: true,
  });

  const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10;
  const passwordHashPromise = bcrypt.hash(password, Number(saltRounds));

  const { count: userExist } = await sql<
    Record<string, unknown>
  >`SELECT 1 FROM users WHERE email=${email}`;

  if (userExist) {
    throw new Error('Account with this email exist');
  }

  //Check if username is in use
  const { count: userNameExist } = await sql<
    Record<string, unknown>
  >`SELECT 1 FROM users WHERE user_name=${user_name.toLowerCase()}`;

  if (userNameExist) {
    throw new Error('Username is not available');
  }

  const passwordHash = await passwordHashPromise;

  const dbRecord: User = {
    user_name: user_name,
    email,
    password: passwordHash,
    ...rest,
  };
  const user = await sql<User>`INSERT INTO users ${sql(
    dbRecord,
  )} RETURNING *`.then(([userData]) => userData);

  const token = tokenEncoder(user);

  const msg = generateMessageTemplate({
    from: process.env.APP_MAIL_ADDRESS,
    to: email,
    templateData: {
      name: user_name,
      url: `${process.env.CLIENT_URL}/verify?vt=${token}`,
    },
    templateId: process.env.VERIFICATION_MAIL_TEMPLATE_ID,
  });
  await sendMail(msg);

  return token;
}
