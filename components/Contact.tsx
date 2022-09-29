import Image from 'next/image';
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

type Props = {
  user: IAuthor;
};

const Contact = ({ user }: Props) => {
  return (
    <div className='text-[#d9d9d9] flex items-center space-x-2 mt-1.5'>
      {user?.image ? (
        <div className='relative'>
          <Image
            src={user.image}
            width={25}
            height={25}
            className='rounded-full'
          />
          <div className='absolute bg-green-500 h-2.5 w-2.5 rounded-full bottom-1.5 right-0 border-[2px] border-[#0d0d0d]' />
        </div>
      ) : (
        <div className='relative'>
          <Image
            src='https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png'
            width={25}
            height={25}
            className='rounded-full opacity-70'
          />
          <div className='absolute bg-green-500 h-2.5 w-2.5 rounded-full bottom-1.5 right-0 border-[2px] border-[#0d0d0d]' />
        </div>
      )}
      <h1 className='text-sm font-bold mb-1.5'>{user?.name}</h1>
    </div>
  );
};

// https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png

export default Contact;
