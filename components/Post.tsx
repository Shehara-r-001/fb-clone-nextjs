import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { BiUserCircle, BiWorld, BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaThumbsUp, FaRegThumbsUp, FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import CommentBox from './CommentBox';
import moment from 'moment';

type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  const { data: session } = useSession() as any;

  var date = new Date(parseInt(post.createdAt)).toISOString();

  return (
    <div className='bg-[#1a1a1a] rounded-md my-4 pb-1'>
      <div className='flex items-center px-3 py-2'>
        <BiUserCircle className='h-8 w-8' />
        <div className='mx-2 flex-1'>
          <h1 className='text-sm font-semibold'>{post.author.name}</h1>
          <div className='flex items-center text-[10px] text-[#ccc] space-x-2'>
            <p>{moment(date).format('llll')}</p>
            <p>{'\u00B7'}</p>
            <BiWorld className='h-3 w-3' />
          </div>
        </div>
        <BiDotsHorizontalRounded className='h-5 w-5' />
      </div>
      <h1 className='px-3 text-sm my-2'>{post.caption}</h1>
      {post.image && <img src={post.image} className='w-full object-contain' />}
      <div className='flex items-center justify-between px-2 text-xs py-2'>
        <div className='flex items-center space-x-1'>
          <div className='bg-blue-500 p-1 rounded-full'>
            <FaThumbsUp className='h-2 w-2 text-white' />
          </div>
          <p className='text-[#ccc]'>{post.likes.length}</p>
        </div>
        <div className='text-[#ccc] flex items-center space-x-2'>
          <p>{post.comments.length} comments</p>
          <p>1 share</p>
        </div>
      </div>
      {session && (
        <div className='mx-2 border-b border-t border-[#404040] flex items-center justify-between py-2 px-5 text-[#ccc] font-semibold'>
          <div className='post__react'>
            <FaRegThumbsUp className='post__reactIcon' />
            <p>Like</p>
          </div>
          <div className='post__react'>
            <FaRegCommentAlt className='post__reactIcon' />
            <p>Comment</p>
          </div>
          <div className='post__react'>
            <RiShareForwardLine className='post__reactIcon' />
            <p>Share</p>
          </div>
        </div>
      )}
      <CommentBox />
    </div>
  );
};

export default Post;
