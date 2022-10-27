import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsCaretLeft } from 'react-icons/bs';
import { GetAllPosts, GetUserByEmail } from '../graphql/queries';
import InputCont from './InputCont';
import Post from './Post';
import Stories from './Stories';

const Feed = () => {
  const { data: session } = useSession() as any;
  const router = useRouter();
  const [userExist, setUserExist] = useState<boolean>();
  const [userID, setUserID] = useState<string>();

  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = useQuery(GetUserByEmail, {
    variables: {
      email: session?.user.email,
    },
    onCompleted: ({ getUserByEmail }) => {
      // console.log(getUserByEmail);

      if (getUserByEmail === null) setUserExist(false);
      else {
        setUserExist(true);
        setUserID(getUserByEmail.id);
      }
    },
  });

  const { data, error, loading } = useQuery(GetAllPosts);
  if (loading) return <h1>loading</h1>;
  if (error) console.log(JSON.stringify(error));

  return (
    <div className='mt-[60px] sm:w-[calc(80vw-90px)] sm:mx-auto md:w-[calc(100vw-340px)] md:ml-[280px] lg:ml-[320px] lg:w-[calc(100vw-640px)] px-2'>
      <Stories />
      <div className='px-10 sm:px-3 lg:px-10'>
        {session ? (
          <InputCont userExist={userExist} user={userID} />
        ) : (
          <div className='border border-red-500 rounded-sm text-center text-sm font-semibold py-2'>
            <h1>You need signin to create posts..!</h1>
            <button
              className='flex items-center justify-center w-1/3 bg-blue-600 mx-auto my-2 text-sm py-2 rounded-lg space-x-1 group'
              onClick={() => router.push('/auth/signin')}
            >
              <BsCaretLeft className='h-4 w-4 group-hover:-translate-x-6 duration-300 ' />
              <h1 className=''>SignIn</h1>
            </button>
          </div>
        )}
        {!loading &&
          data?.getAllPosts.map((post: IPost) => (
            <Post
              key={post?.id}
              post={post}
              userExist={userExist}
              user={userID}
            />
          ))}
      </div>
    </div>
  );
};

export default Feed;
