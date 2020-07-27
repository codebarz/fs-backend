import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import sampleController from './controllers/sample';
import SampleType from './types/sample';
import { UserInputType } from './types/user.ts/type';
import { SignupType } from './types/auth/type';
import { auth } from './controllers';

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'The query root of Nert.',
  fields: () => ({
    sample: {
      type: SampleType,
      description: 'A sample root schema',
      resolve: () => sampleController(),
    },
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The query root for fs',
  fields: () => ({
    signup: {
      type: SignupType,
      description: 'The mutation for signup',
      args: { data: { type: UserInputType } },
      resolve: async (_, { data }): Promise<{ token: string }> => {
        const response = await auth.signup(data);

        return { token: response };
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
