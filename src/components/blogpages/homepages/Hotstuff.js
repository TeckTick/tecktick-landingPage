import React from 'react';
import bg from '../../../assets/images/BG.png';
import { FaLongArrowAltRight, FaMinus } from "react-icons/fa";
import border from '../../../assets/images/border.png';
import { bloghome } from '../../../data/bloghome';

const Hotstuff = ({ index }) => {
  // Get the data for the specified index
  const { img, category, title, desc, date, avator, author } = bloghome[3];

  return (
    <div className='flex justify-center'>
      <div className='w-[1320px] h-[744px] top-[4641px] left-[300px] mt-20'>
        <div className='flex mb-8 mt-6'>
          <h3 className='font-jost font-medium text-5xl text-[#000000]'>Hot Stuff</h3>
          <img src={border} alt='' className='w-[1013px] h-[8px] mt-7'/>
        </div>
        <div className='absolute flex'>
          <img src={img} alt='' className='w-[788px] h-[650px] bg-[#EFF2FB]'/>
          <div className='relative'>
            <img src={bg} alt='' className='w-[659px] h-[650px] ml-[-74px] items-center' />
            <div className='absolute top-[72px] w-[432px] h-[507px] left-[50px]'>
              <div className='w-[74px] h-[21px] top-[72px] left-[50px] border-[1px] gap-[10px] bg-[#FFFFFF] text-center mb-8'>
                <p className='font-spartan font-bold text-xs text-[#000000]'>{category}</p>
              </div>
              <p className='font-jost font-medium text-5xl text-[#FFFFFF] capitalize mb-8'>{title}</p>
              <p className='font-spartan font-normal text-base text-[#FFFFFF] mb-8'>{desc}</p>
              <p className='flex font-spartan font-normal text-xs text-[#FFFFFF] gap-2 mb-8'>{date} <FaMinus/>
              <img src={avator} alt='' className='w-[16px] h-[16px]'/> {author}</p>
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
