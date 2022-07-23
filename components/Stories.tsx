import React from 'react';
import DATA from '../assets/data/MOCK_DATA.json';
import Story from './Story';
import ScrollContainer from 'react-indiana-drag-scroll';

const Stories = () => {
  return (
    <div>
      <ScrollContainer className='flex items-center w-[100vw] overflow-x-scroll scrollbar-hide space-x-4 px-2 sm:w-[80vw] sm:mx-auto md:w-[calc(100vw-240px)] md:ml-[220px] lg:ml-[270px] lg:w-[calc(100vw-540px)]'>
        {DATA.map((data) => (
          <div key={data.id}>
            <Story data={data} />
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Stories;
