import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: String
    name: String
    email: String
    image: String
  }

  type Post {
    id: String
    caption: String
    image: String
    userId: String
  }

  type Query {
    posts: [Post]!
  }
`;
