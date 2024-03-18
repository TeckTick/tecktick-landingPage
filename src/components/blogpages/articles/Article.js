import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import articles from '../../../data/article';
const Article = () => {
  return (
    <div className='bg-[#f4f0ff] w-screen h-[1789px] top-[1314px] content-center '>
      <div className='grid justify-center grid-row-3 grid-cols-3 w-[1268px] h-[474.75px] gap-12 pt-10 '>
      {articles.map((item, index) => (
        <div key={index} className='bg-[#FFFFFF]  w-[400px] h-[474.75px] rounded-[13.36px] gap-[12px] p-6 '>
          <div className='bg-[#D9D9D9] max-w-[378.63px] max-h-[294.1px] w-full  overflow-hidden h-full rounded-[23px] p-1 mb-2'>
            <img src={item.image} alt='' className='h-full w-full  object-cover rounded-[23px]' />
          </div>
          <div className='flex gap-6 items-center text-base'>
            <p className='text-[#171717] font-inter font-medium bg-[#D9D9D9] rounded-[18px] px-[5px] text-base'>
              {item.category}
              </p>
            <span className='w-[86px] h-[16px] font-normal text-sm text-center text-[#131313]'>
               {item.readTime}</span>
          </div>
           
            <h1 className='font-inter text-[#171717] font-semibold text-[17px] sm:text-[20px] lg:text-[26px] max-w-[570px]'>
             {item.articleName}
            </h1>
          
          <button className='flex gap-5 font-montserrat font-semibold text-[#450099] text-xl items-center'>
            <p className=''>Read More</p> 
            <FaLongArrowAltRight />
          </button>
          
        </div>
        ))}
      </div>
      

    </div>
  )
}

export default Article