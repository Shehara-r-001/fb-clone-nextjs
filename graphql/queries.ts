import { gql } from '@apollo/client';

export const GetAllPosts = gql`
  query getAllPosts {
    getAllPosts {
      id
      caption
      createdAt
      image
      author {
        id
        name
      }
      comments {
        id
        desc
        createdAt
      }
      likes {
        id
      }
    }
  }
`;

export const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      id
      name
      email
      image
    }
  }
`;
