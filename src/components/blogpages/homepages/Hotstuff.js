import React from 'react';
import bg from '../../../assets/images/BG.png';
import { FaLongArrowAltRight, FaMinus } from "react-icons/fa";
import dp from '../../../assets/images/Ellipse 7.png';
import border from '../../../assets/images/border.png'

const Hotstuff = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1320px] h-[744px] top-[4641px] left-[300px]'>
        <div className='flex mb-8 mt-6'>
          <h3 className='font-jost font-medium text-5xl text-[#000000]'>Hot Stuff</h3>
          <img src={border} alt='' className='w-[1013px] h-[8px] mt-7'/>
        </div>
        <div className='absolute flex'>
          <img src='' alt='' className='w-[788px] h-[650px] bg-[#EFF2FB]'/>
          <div className='relative'>
            <img src={bg} alt='' className='w-[659px] h-[650px] ml-[-70px] items-center' />
            <div className='absolute top-[72px] w-[432px] h-[507px] left-[50px]'>
              <div className='w-[74px] h-[21px] top-[72px] left-[50px] border-[1px] gap-[10px] bg-[#FFFFFF] text-center mb-8'>
                <p className='font-spartan font-bold text-xs text-[#000000]'>interior</p>
              </div>
              <p className='font-jost font-medium text-5xl text-[#FFFFFF] capitalize mb-8'>the best solutions for the interior of a bedroom in an apartment</p>
              <p className='font-spartan font-normal text-base text-[#FFFFFF] mb-8'>A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back ...</p>
              <p className='flex font-spartan font-normal text-xs text-[#FFFFFF] gap-2 mb-8'>Jul 06, 2021 <FaMinus/>
              <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
              <button className='flex gap-2 font-montserrat font-medium text-[#FFFFFF] text-base items-center'>
                      <p>Read More</p> 
                      <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotstuff;
