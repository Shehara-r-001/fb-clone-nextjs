import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Comment = () => {
  const { data: session } = useSession();
  return (
    <div className='w-full px-3'>
      <div className='flex space-x-2'>
        <div>
          <Image
            src='https://i.pinimg.com/736x/ea/9e/42/ea9e4221c9b0d88cf50ff68946ba17b3.jpg'
            height={35}
            width={35}
            objectFit='cover'
            className='rounded-full'
          />
        </div>
        <div className='text=[#ccc]'>
          <div className='bg-[#333] rounded-lg px-3 py-1 text-sm'>
            <h1 className='font-semibold'>Name of the user</h1>
            <p>This is his comment..</p>
          </div>
          {session && (
            <div className='text-xs flex items-center space-x-3 pl-1 mt-1'>
              <p className='comment__react'>Like</p>
              <p className='comment__react'>Reply</p>
              <p>3d ago</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
