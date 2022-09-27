import { useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillCaretDown, AiOutlineGif } from 'react-icons/ai';
import { BsEmojiSmile, BsCamera } from 'react-icons/bs';
import {
  CreateCommentMutation,
  CreateUserMutation,
} from '../graphql/mutations';
import { GetCommentsByPostId } from '../graphql/queries';
import Comment from './Comment';

type Props = {
  postid: string;
  userExist: boolean | undefined;
  user: string | undefined;
};

const CommentBox = ({ postid, userExist, user }: Props) => {
  const { data: session } = useSession() as any;
  const [comments, setComments] = useState<IComment[]>();
  const [newComment, setNewComment] = useState<string>();
  const newCommentRef = useRef<any>(null);
  const [userID, setUserID] = useState<string>();

  useEffect(() => {
    setUserID(user);
  });

  const { data, error, loading } = useQuery(GetCommentsByPostId, {
    variables: {
      postId: postid,
    },
    onCompleted: ({ getCommentsByPostId }) => {
      // console.log(getCommentsByPostId);
      setComments(getCommentsByPostId);
    },
    onError: (error) => console.log(error),
  });

  const [createUser] = useMutation(CreateUserMutation);

  const [createComment] = useMutation(CreateCommentMutation, {
    refetchQueries: [{ query: GetCommentsByPostId }],
  });

  const addNewComment = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userExist) {
      createUser({
        variables: {
          email: session?.user.email,
          name: session?.user.name,
          image: session?.user.image,
        },
        onError: (error) => {
          console.log(error);
        },
        onCompleted: ({ createUser }) => {
          console.log('A new user has been created..', createUser);
          setUserID(createUser.id);
        },
      });
    }

    await createComment({
      variables: {
        postId: postid,
        desc: newComment,
        userId: userID,
      },
      onCompleted: (data) => {
        console.log(data);
        toast.success('Comment has been created..');
      },
      onError: (error) => {
        console.log(error);
        toast.error('Comment failed..!');
      },
    });

    newCommentRef.current.value = '';
    setNewComment('');
  };

  return (
    <div>
      {!!comments?.length && (
        <div className='px-3 my-2 flex justify-between items-center font-semibold text-[#ccc] text-sm'>
          <h1 className='cursor-pointer'>View previous comments</h1>
          <h1 className='flex items-center'>
            Most relevent{' '}
            <span className='ml-2 cursor-pointer'>
              <AiFillCaretDown />
            </span>
          </h1>
        </div>
      )}
      <div className='space-y-2'>
        {!!comments?.length &&
          comments
            ?.slice(0, 2)
            .map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
      {session && (
        <form
          onSubmit={addNewComment}
          className='flex items-center px-3 my-2 space-x-2 relative'
        >
          <Image
            src={session.user?.image}
            alt='fb'
            height={30}
            width={30}
            className='header__icon'
          />
          <input
            type='text'
            placeholder='Write a comment..'
            className='bg-[#333] outline-none text-sm py-2 px-2 rounded-full flex-1 '
            onChange={(e) => setNewComment(e.target.value)}
            ref={newCommentRef}
          />
          <div className='flex items-center space-x-2 absolute right-[20px] top-2.5'>
            <BsEmojiSmile className='comment_options' />
            <BsCamera className='comment_options' />
            <AiOutlineGif className='comment_options border border-[#ccc] rounded-sm' />
          </div>
        </form>
      )}
    </div>
  );
};

export default CommentBox;
