import React from 'react';
import { AiTwotoneGift } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Contacts from './Contacts';

const RightPanel = () => {
  return (
    <div className='translate-x-[500px] lg:translate-x-0 fixed top-[60px] right-5 text-white w-[250px] h-screen overflow-y-scroll scrollbar-hide'>
      <div className='w-[220px] bg-[#262626] mx-auto p-3 rounded-md text-[#d9d9d9]'>
        <div className='flex items-center justify-between'>
          <AiTwotoneGift className='h-5 w-5 text-[#00b8e6]' />
          <h1 className='text-sm font-semibold'>Birthdays</h1>
          <IoMdClose className='cursor-pointer' />
        </div>
        <p className='text-sm my-3'>
          <span className='font-semibold text-white'>Wolwerine</span> and{' '}
          <span className='font-semibold text-white'>4 others</span> have their
          birthdays today
        </p>
      </div>
      <Contacts />
    </div>
  );
};

export default RightPanel;
