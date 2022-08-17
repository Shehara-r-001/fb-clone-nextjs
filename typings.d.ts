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
