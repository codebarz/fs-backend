import { GraphQLObjectType, GraphQLString } from 'graphql';

export const SignupType = new GraphQLObjectType<{ token: string }>({
  name: 'SignupType',
  description: 'The use object',
  fields: () => ({
    token: { type: GraphQLString, description: 'The signup token' },
  }),
});
