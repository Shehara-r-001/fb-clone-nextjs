import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineGif } from 'react-icons/ai';
import { BsEmojiSmile, BsCamera } from 'react-icons/bs';
import { GetCommentsByPostId } from '../graphql/queries';
import Comment from './Comment';

type Props = {
  postid: string;
};

const CommentBox = ({ postid }: Props) => {
  const { data: session } = useSession() as any;
  const [comments, setComments] = useState<IComment[]>();

  const { data, error, loading } = useQuery(GetCommentsByPostId, {
    variables: {
      postId: postid,
    },
    onCompleted: ({ getCommentsByPostId }) => {
      console.log(getCommentsByPostId);
      setComments(getCommentsByPostId);
    },
    onError: (error) => console.log(error),
  });

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
      <div>
        {!!comments?.length &&
          comments
            ?.slice(0, 2)
            .map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
      {session && (
        <div className='flex items-center px-3 my-2 space-x-2 relative'>
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
          />
          <div className='flex items-center space-x-2 absolute right-[20px] top-2.5'>
            <BsEmojiSmile className='comment_options' />
            <BsCamera className='comment_options' />
            <AiOutlineGif className='comment_options border border-[#ccc] rounded-sm' />
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
