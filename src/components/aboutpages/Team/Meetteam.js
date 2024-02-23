import React from 'react';
import teamdata from "../../../data/meetteam";
import { FaLinkedin } from "react-icons/fa";
import Marquee from "react-fast-marquee";


const Meetteam = () => {
  // const [startIndex, setStartIndex] = useState(0);
  // const itemsPerPage = 4;
  // const maxStartIndex = Math.max(0, teamdata.length - itemsPerPage);

  // const handleNext = () => {
  //   const nextIndex = startIndex + itemsPerPage;
  //   if (nextIndex < teamdata.length) {
  //     setStartIndex(nextIndex);
  //   }
  // };

  // const handleBack = () => {
  //   const prevIndex = startIndex - itemsPerPage;
  //   if (prevIndex >= 0) {
  //     setStartIndex(prevIndex);
  //   }
  // };

   const handleNameClick = (linkedin) => {
     window.open(linkedin, '_blank');
     };

  return (
    <div className='w-full bg-[#ECE4FF] mx-auto py-8 relative'>
      <p className='font-semibold text-[44px] font-montserrat text-[#450099] text-center mb-10'>Meet The Team</p>
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
      <div className='flex flex-row w-full justify-center mb-10'>
        {teamdata.map((item, index) => (
          <div key={index} className='flex flex-col items-center mx-6'>
            <img src={item.image} alt={item.name} className='w-[292px] h-[438px] mb-4' />
            <span className='flex flex-col font-semibold text-[20px] text-center text-[#000000] w-[292px]'>
              <p className=' cursor-pointer'>{item.name}  </p> 
              <p className='flex items-center  justify-center text-[#5C5C77] font-normal gap-2'> <span>{item.role} </span>
             <p onClick={() => handleNameClick(item.linkedin)}> 
              <FaLinkedin  size={20}  className='text-[#450099] items-start'/> </p>
              </p>
             
            </span>
          </div>
        ))}
        
      </div>
      </Marquee>

      {/* <button onClick={handleBack} disabled={startIndex === 0} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl">&#8249;</button>
      <button onClick={handleNext} disabled={startIndex >= maxStartIndex} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl">&#8250;</button> */}
    </div>
  );
};

export default Meetteam;
