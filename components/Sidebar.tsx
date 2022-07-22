import Image from 'next/image';
import React from 'react';
import { FaUserFriends, FaStore, FaUserCircle } from 'react-icons/fa';
import { BsFillBookmarkFill, BsPlayCircleFill } from 'react-icons/bs';
import { RiGroup2Fill } from 'react-icons/ri';
import { ImPlay } from 'react-icons/im';
import { CgTimelapse } from 'react-icons/cg';
import { BiChevronDown } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Sidebar;
