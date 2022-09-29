import React, { useState } from 'react';
import { MdVideoCall } from 'react-icons/md';
import { BiSearch, BiDotsHorizontalRounded } from 'react-icons/bi';
import Contact from './Contact';
import { useQuery } from '@apollo/client';
import { GetAllUsers } from '../graphql/queries';

const Contacts = () => {
  const { data, error, loading } = useQuery(GetAllUsers, {
    onCompleted: (getAllUsers) => console.log(getAllUsers),
    onError: (error) => console.log(error),
  });
  return (
    <div className='border-t mt-3 border-[#404040] w-[220px] mx-auto'>
      <div className='flex items-center justify-between mt-2 mb-4'>
        <h1 className='font-bold text-sm text-[#a6a6a6]'>Contacts</h1>
        <div className='flex items-center space-x-3'>
          <MdVideoCall className='contacts_icons' />
          <BiSearch className='contacts_icons' />
          <BiDotsHorizontalRounded className='contacts_icons' />
        </div>
      </div>
      {data?.getAllUsers.slice(0, 20).map((user: IAuthor) => (
        <Contact key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Contacts;
