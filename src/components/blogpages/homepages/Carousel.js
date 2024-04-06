import React from 'react';
import { FaMinus } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import { bloghome } from '../../../data/bloghome';

const Carousel = () => {
  return (
    <div className='all flex justify-center mt-4 gap-2'>
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {bloghome.map((post, index) => (
          <div key={index} className='card carouselbg border-[2px] w-[945px] h-[650px] mt-10 mb-40 flex flex-col justify-center items-center'>
            <img src={post.img} alt='' className='w-full h-auto max-h-[450px]'/>
            <div className='content w-full px-4 py-6 flex flex-col items-center'>
              <p className='category w-[100px] h-[21px] text-center content-center bg-[#FFFFFF] font-jost font-bold text-xs text-[#000000]'>{post.category}</p>
              <p className='title w-[515px] mt-4 font-jost font-medium text-3xl text-[#FFFFFF] text-center'>{post.title}</p>
              <p className='date mt-4 flex gap-2 font-jost font-normal text-xs text-[#FFFFFF]'>{post.date} <FaMinus className='mt-1'/> 
                <img src={post.avator} alt='' className='w-[16px] h-[16px]'/> {post.author}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Carousel;
