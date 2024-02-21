import React from 'react';
import quotes from '../../../assets/images/Vector.svg';

const Quotes = () => {
  return (
    <div className='w-full h-[490px] bg-[#2F007A] relative'>
      <div className='w-[1140px] h-[252px] top-[119px] left-[95px] border-blue-800 border-[2.5px] p-[10px] gap-[10px] relative'>
        <div className='absolute left-10 top-[-18px]'>
          <img src={quotes} alt='quotes' className='w-[48px] h-[36px] text-[#FFFFFF]' />
        </div>
        <div className='w-[868px] h-[120px] flex justify-center items-start'>
          <span className='text-[30px] text-[#FFFFFF] font-normal  leading-[60px] font-montserrat text-start px-5 my-10 ml-28 tracking-tight'>
            Empowering innovation and fostering collaboration - together, we build the future.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
