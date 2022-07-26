import React, { useRef } from 'react';
import DATA from '../assets/data/MOCK_DATA.json';
import Story from './Story';
import ScrollContainer from 'react-indiana-drag-scroll';
import Image from 'next/image';
import { TiPlus } from 'react-icons/ti';

const Stories = () => {
  return (
    <div>
      <ScrollContainer className='flex items-center w-[100vw] overflow-x-scroll scrollbar-hide sm:w-[calc(80vw-90px)] sm:mx-auto md:w-[calc(100vw-340px)] md:ml-[280px] lg:ml-[320px] lg:w-[calc(100vw-640px)]'>
        <div className='flex items-center space-x-2 px-2'>
          <div className='h-[200px] w-[120px] flex flex-col -mt-2 group cursor-pointer'>
            <Image
              src='https://avatars.githubusercontent.com/u/84827162?v=4'
              alt='story-user'
              height={150}
              width={120}
              objectFit='cover'
              className='rounded-t-[4px]'
            />
            <div className='bg-[#333] h-[50px] w-full relative rounded-b-md'>
              <h1 className='text-sm font-semibold absolute bottom-2 left-4'>
                Create a story
              </h1>

              <TiPlus className='bg-blue-600 h-6 w-6 p-1 rounded-full absolute -top-3 left-[calc(60px-12px)] group-hover:scale-110 duration-300' />
            </div>
          </div>
          {DATA.map((data) => (
            <div key={data.id}>
              <Story data={data} />
            </div>
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Stories;
