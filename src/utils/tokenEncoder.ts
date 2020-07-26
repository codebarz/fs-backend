import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../typings/tables';

export default function tokenEncoder(user: User, options?: SignOptions) {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      ...options,
    },
  );
}
