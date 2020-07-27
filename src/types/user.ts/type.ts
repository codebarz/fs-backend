import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLScalarType,
  GraphQLInputObjectType,
} from 'graphql';
import { User } from '../../typings/tables';

const GraphQLDate = new GraphQLScalarType({
  name: 'Date',
  serialize: () => Date,
});

export const UserType = new GraphQLObjectType<User>({
  name: 'UserType',
  description: 'The user object',
  fields: () => ({
    username: {
      type: GraphQLString,
      description: 'The account username',
      resolve: parent => parent.user_name,
    },
    email: {
      type: GraphQLString,
      description: 'The account email address',
    },
    password: {
      type: GraphQLString,
      description: 'The account password',
    },
    avatarURL: {
      type: GraphQLString,
      description: 'The URL to account profile image',
      resolve: parent => parent.user_name,
    },
    createdAt: {
      type: GraphQLDate,
      description: 'The date and time the account was created',
      resolve: parent => parent.created_at,
    },
    updatedAt: {
      type: GraphQLDate,
      description: 'The date and time the account was last updated',
      resolve: parent => parent.updated_at,
    },
    deletedAt: {
      type: GraphQLDate,
      description: 'The date and time the account was deleted',
      resolve: parent => parent.deleted_at,
    },
  }),
});

export const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  description: 'The user mutation input type',
  fields: () => ({
    username: {
      type: GraphQLString,
      description: 'The account username',
    },
    email: {
      type: GraphQLString,
      description: 'The account email address',
    },
    password: {
      type: GraphQLString,
      description: 'The account password',
    },
    avatarURL: {
      type: GraphQLString,
      description: 'The URL to account profile image',
    },
  }),
});
