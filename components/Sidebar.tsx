import React from 'react';
import { FaUserFriends, FaStore, FaUserCircle } from 'react-icons/fa';
import {
  BsEmojiDizzyFill,
  BsFillBookmarkFill,
  BsPlayCircleFill,
} from 'react-icons/bs';
import { RiGroup2Fill } from 'react-icons/ri';
import { CgTimelapse } from 'react-icons/cg';
import { BiChevronDown } from 'react-icons/bi';
import { GiWorld } from 'react-icons/gi';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='overflow-y-scroll pb-6 hidden md:flex md:flex-col w-[200px] lg:w-[250px] fixed left-0 top-[50px] h-[calc(100vh-50px)] scrollbar-thin hover:scrollbar-track-pink-dark hover:scrollbar-thumb-pink-dark-2 pr-2'>
      <div>
        <div className='sidebar__item group'>
          <FaUserCircle className='sidebar__icon' />
          <h1 className='sidebar__nameTag'>Username</h1>
        </div>
        <div className='sidebar__item group'>
          <FaUserFriends className='sidebar__icon text-cyan-400' />
          <h1 className='sidebar__nameTag'>Friends</h1>
        </div>
        <div className='sidebar__item group'>
          <BsFillBookmarkFill className='sidebar__icon text-fuchsia-600' />
          <h1 className='sidebar__nameTag'>Save</h1>
        </div>
        <div className='sidebar__item group'>
          <RiGroup2Fill className='sidebar__icon text-[#00ccff] bg-white rounded-full' />
          <h1 className='sidebar__nameTag '>Groups</h1>
        </div>
        <div className='sidebar__item group'>
          <FaStore className='sidebar__icon text-[#3399ff]' />
          <h1 className='sidebar__nameTag'>Market place</h1>
        </div>
        <div className='sidebar__item group'>
          <BsPlayCircleFill className='sidebar__icon text-cyan-400' />
          <h1 className='sidebar__nameTag'>Watch</h1>
        </div>
        <div className='sidebar__item group'>
          <CgTimelapse className='sidebar__icon text-rose-400' />
          <h1 className='sidebar__nameTag'>Memories</h1>
        </div>
        <div className='sidebar__item group'>
          <BiChevronDown className='sidebar__icon bg-[#404040] rounded-full cursor-pointer' />
          <h1 className='sidebar__nameTag'>See more</h1>
        </div>
      </div>
      <div className='mt-5 border-t border-gray-500'>
        <h1 className='font-semibold ml-5 text-gray-400 text-base mt-2'>
          Your shortcuts
        </h1>
        <div className='sidebar__item group'>
          <GiWorld className='sidebar__icon text-green-300' />
          <h1 className='sidebar__nameTag'>Connect to the world</h1>
        </div>
        <div className='sidebar__item group'>
          <BsEmojiDizzyFill className='sidebar__icon text-white' />
          <h1 className='sidebar__nameTag'>OMG</h1>
        </div>
        <div>
          <div className='sidebar__item group'>
            <Image
              src='https://i.pinimg.com/originals/22/4a/77/224a775f80315460af88e759c753bb03.jpg'
              height={30}
              width={30}
              objectFit='cover'
              className='rounded-full'
            />
            <h1 className='sidebar__nameTag'>One Piece</h1>
          </div>
          <div className='sidebar__item group'>
            <Image
              src='https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg?q=60'
              height={30}
              width={30}
              objectFit='cover'
              className='rounded-full'
            />
            <h1 className='sidebar__nameTag'>Be a Football Manager</h1>
          </div>
          <div className='sidebar__item space-x-1 text-[10px] lg:text-xs font-light'>
            <p>Privacy</p>
            <span className='font-semibold'>{'\u00B7'}</span>
            <p>Terms</p>
            <span className='font-semibold'>{'\u00B7'}</span>
            <p>Advertising</p>
            <span className='font-semibold'>{'\u00B7'}</span>
            <p>Ad choices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
