import React from 'react';
import teamdata from "../../../data/meetteam"

const Meetteam = () => {
  return (
    <div className=' w-full bg-[#ECE4FF] mx-auto py-14'>
        <p className='font-semibold text-[44px] font-montserrat text-[#450099] text-center mb-14'>Meet The Team</p>
      
      <div className='flex flex-row w-full justify-center gap-8 mb-10'>
        {teamdata.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img src={item.image} alt={item.name} className='w-[292px] h-[438px] mb-4' />
            <p className='font-semibold text-[20px] text-center text-[#000000]'>{item.name} <span className='text-[#5C5C77] font-normal'>{item.role}</span>  </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetteam;
