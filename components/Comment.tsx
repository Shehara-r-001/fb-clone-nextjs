import moment from 'moment';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  comment: IComment;
};

const Comment = ({ comment }: Props) => {
  const { data: session } = useSession();
  var date = new Date(parseInt(comment.createdAt)).toISOString();
  return (
    <div className='w-full px-3'>
      <div className='flex space-x-2'>
        <div>
          {comment.author.image ? (
            <Image
              src={comment.author.image}
              height={35}
              width={35}
              objectFit='cover'
              className='rounded-full'
            />
          ) : (
            <Image
              src={`https://i.pinimg.com/736x/ea/9e/42/ea9e4221c9b0d88cf50ff68946ba17b3.jpg`}
              height={35}
              width={35}
              objectFit='cover'
              className='rounded-full'
            />
          )}
        </div>
        <div className='text=[#ccc]'>
          <div className='bg-[#333] rounded-lg px-3 py-1 text-sm'>
            <h1 className='font-semibold'>{comment.author.name}</h1>
            <p>{comment.desc}</p>
          </div>
          {session && (
            <div className='text-xs flex items-center space-x-3 pl-1 mt-1'>
              <p className='comment__react'>Like</p>
              <p className='comment__react'>Reply</p>
              <p>{moment(date).startOf('hour').fromNow()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
