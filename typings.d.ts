type StoryData = {
  id: number;
  name: string;
  profilePic: string;
  story: string;
};

type Provider = {
  [type: string]: {
    id: string;
    name: string;
    signinUrl: string;
    callbackUrl: string;
  };
};

// interface Post {
//   id: string;
//   caption: string;
//   createdAt: string;
//   image: string;
//   author: Author;
//   comments: Comment[];
//   likes: Like[];
// }

// interface Author {
//   id: string;
//   name: string;
//   image: string;
//   email: string;
//   createdAt: string;
// }

// interface Comment {
//   id: string;
//   desc: string;
//   createdAt: string;
// }

// interface Like {
//   id: string;
// }
