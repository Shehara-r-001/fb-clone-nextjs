import { gql } from '@apollo/client';

export const CreatePostMutation = gql`
  mutation CreatePost(
    $id: String
    $caption: String
    $image: String
    $userId: String!
  ) {
    createPost(id: $id, caption: $caption, image: $image, userId: $userId) {
      id
      caption
      image
      author {
        id
      }
      createdAt
    }
  }
`;

export const CreateUserMutation = gql`
  mutation CreateUser(
    $id: String
    $email: String!
    $name: String!
    $image: String
  ) {
    createUser(id: $id, email: $email, name: $name, image: $image) {
      id
      name
      email
      image
    }
  }
`;

export const CreateCommentMutation = gql`
  mutation CreateComment($postId: String!, $desc: String!, $userId: String!) {
    createComment(postId: $postId, desc: $desc, userId: $userId) {
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
