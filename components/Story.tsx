import Image from 'next/image';
import React from 'react';

type Props = {
  data: StoryData;
};

const Story = ({ data }: Props) => {
  return (
    <div>
      <div className='h-[210px] w-[120px] relative group cursor-pointer'>
        <Image
          className='rounded-md '
          src={data.story}
          height={200}
          width={120}
          objectFit='cover'
        />
        <div className='absolute top-2 left-1 rounded-full border-[3px] border-blue-700 flex items-center justify-center bg-sky-500/100 group-hover:scale-110 duration-200'>
          <Image
            className='rounded-full '
            src={data.profilePic}
            height={30}
            width={30}
            objectFit='cover'
          />
        </div>
        <h1 className='font-semibold text-sm absolute bottom-4 left-2 max-w-[110px]'>
          {data.name}
        </h1>
      </div>
    </div>
  );
};

export default Story;
