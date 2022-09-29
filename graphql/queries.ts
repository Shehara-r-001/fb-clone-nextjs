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

export const GetCommentsByPostId = gql`
  query GetCommentsByPostId($postId: String!) {
    getCommentsByPostId(postId: $postId) {
      id
      desc
      createdAt
      author {
        id
        name
        image
      }
    }
  }
`;

export const GetLikesbyPost = gql`
  query GetLikesbyPost($postId: String!) {
    getLikesbyPost(postId: $postId) {
      id
      post {
        id
      }
      author {
        id
      }
    }
  }
`;
