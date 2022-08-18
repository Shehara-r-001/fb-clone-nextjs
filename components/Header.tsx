import Image from 'next/image';
import React, { useEffect } from 'react';
import {
  BsSearch,
  BsMessenger,
  BsFillCollectionPlayFill,
} from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { HiBell, HiMenu, HiUserGroup } from 'react-icons/hi';
import { CgMenuGridR } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { BiStoreAlt } from 'react-icons/bi';
import { SiNintendogamecube } from 'react-icons/si';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Header = () => {
  const { data: session } = useSession() as any;
  const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push('/auth/signin');
  //   }
  // }, [router, session]);

  return (
    <div className='bg-[#1a1a1a] border-b border-t border-b-[#333333] border-t-[#333333] p-2 flex align-center justify-between fixed top-0 left-0 w-[100vw] z-50'>
      <div className='flex items-center space-x-1'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png'
          alt='fb'
          height={34}
          width={34}
          className='cursor-pointer'
        />
        <div className='flex items-center bg-[#404040] rounded-full'>
          <div className='bg-[#404040] rounded-full  flex items-center justify-center h-9 w-9'>
            <BsSearch className='h-4 w-4 cursor-pointer' />
          </div>
          <input
            type='text'
            placeholder='search..'
            className='hidden lg:inline bg-[#404040] p-2 text-sm outline-none rounded-full w-[160px]'
          />
        </div>
      </div>
      <div className='hidden md:flex align-center justify-between md:w-[400px] lg:w-[500px] py-1.5 lg:-ml-[75px]'>
        <AiTwotoneHome className='header__iconMid' />
        <BsFillCollectionPlayFill className='header__iconMid' />
        <BiStoreAlt className='header__iconMid' />
        <HiUserGroup className='header__iconMid' />
        <SiNintendogamecube className='header__iconMid' />
      </div>
      <div className='md:hidden flex-1 flex justify-end px-2'>
        <GoPlus className='header__icon' />
      </div>
      <div className='flex align-center space-x-2'>
        <CgMenuGridR className='hidden md:inline header__icon' />
        <div className='header__iconDiv'>
          <BsMessenger className='header__icon' />
          <span className='header__notification'>7</span>
        </div>
        <div className='header__iconDiv'>
          <HiBell className='header__icon -rotate-[30deg]' />
          <span className='header__notification'>9</span>
        </div>
        {session ? (
          <div className='flex justify-center items-center'>
            <Image
              src={session.user?.image}
              alt='fb'
              height={30}
              width={30}
              className='header__icon'
              onClick={() => signOut({ callbackUrl: '/auth/signin' })}
            />
          </div>
        ) : (
          <FaUserCircle
            className='header__icon'
            onClick={() => router.push('/auth/signin')}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
