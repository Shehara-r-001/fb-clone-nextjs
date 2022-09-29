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

interface IPost {
  id: string;
  caption: string;
  createdAt: string;
  image: string;
  author: IAuthor;
  comments: IComment[];
  likes: ILike[];
}

interface IAuthor {
  id: string;
  name: string;
  image: string;
  email: string;
  createdAt: string;
}

interface IComment {
  id: string;
  desc: string;
  createdAt: string;
  author: IAuthor;
}

interface ILike {
  id: string;
  author: {
    id;
  };
  post: {
    id;
  };
}
