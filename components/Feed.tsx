import React from 'react';
import InputCont from './InputCont';
import Stories from './Stories';

const Feed = () => {
  return (
    <div className='mt-[60px] sm:w-[calc(80vw-90px)] sm:mx-auto md:w-[calc(100vw-340px)] md:ml-[280px] lg:ml-[320px] lg:w-[calc(100vw-640px)] px-2'>
      <Stories />
      <div className='px-10 sm:px-3 lg:px-10'>
        <InputCont />
      </div>
    </div>
  );
};

export default Feed;
