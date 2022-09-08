import { gql } from 'apollo-server-micro';

export const GetAllPosts = gql`
  query getAllPosts {
    posts {
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
      }
      likes {
        id
      }
    }
  }
`;
