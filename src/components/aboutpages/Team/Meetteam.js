import React, { useState } from 'react';
import teamdata from "../../../data/meetteam";

const Meetteam = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const maxStartIndex = Math.max(0, teamdata.length - itemsPerPage);

  const handleNext = () => {
    const nextIndex = startIndex + itemsPerPage;
    if (nextIndex < teamdata.length) {
      setStartIndex(nextIndex);
    }
  };

  const handleBack = () => {
    const prevIndex = startIndex - itemsPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const handleNameClick = (linkedin) => {
    window.open(linkedin, '_blank');
  };

  return (
    <div className='w-full bg-[#ECE4FF] mx-auto py-14 relative'>
      <p className='font-semibold text-[44px] font-montserrat text-[#450099] text-center mb-14'>Meet The Team</p>

      <div className='flex flex-row w-full justify-center gap-8 mb-10'>
        {teamdata.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img src={item.image} alt={item.name} className='w-[292px] h-[438px] mb-4' />
            <p className='font-semibold text-[20px] text-center text-[#000000] w-[292px]'>
              <span onClick={() => handleNameClick(item.linkedin)} className=' cursor-pointer'>{item.name} </span> 
              <span className='text-[#5C5C77] font-normal'> {item.role}</span>
            </p>
          </div>
        ))}
      </div>

      <button onClick={handleBack} disabled={startIndex === 0} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl">&#8249;</button>
      <button onClick={handleNext} disabled={startIndex >= maxStartIndex} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl">&#8250;</button>
    </div>
  );
};

export default Meetteam;
