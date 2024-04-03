import React from 'react'
import { FaLongArrowAltRight, FaMinus } from "react-icons/fa";
import dp from '../../../assets/images/Ellipse 7.png';
import border from '../../../assets/images/border.png'

const Topoftheweek = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='all w-[1320px] h-[516px] left-[300px]'>
            <div className='head flex mb-10 gap-4'>
                <h3 className='capitalize font-jost font-medium text-5xl text-[#000000]'>top of the week</h3>
                <img src={border} alt='' className='w-[713px] h-[8px] mt-7'/>
                <button className='flex gap-2 font-montserrat font-medium text-[#000000] text-base items-center'>
                      <p>view all posts</p> 
                      <FaLongArrowAltRight />
                    </button>
            </div>
            <div className='content grid grid-cols-3 gap-10'>
                <div className='card w-[420px] h-[422px] top-[94px]'>
                    <img src='' alt='' className='w-[420px] h-[220px] bg-[#EFF2FB] mb-4'/>
                    <p className='category w-[52px] h-[11px] font-jost font-bold text-xs mb-4 text-[#000000] border-[1px]'>Fashion</p>
                    <p className='title capitalize mb-4 font-jost font-medium text-2xl text-[#000000]'>a selection of the best travel books for lovers of a quiet holiday</p>
                    <p className='flex font-spartan font-normal text-xs text-[#555555] gap-2 mb-8'>Jul 06, 2021 <FaMinus/>
                    <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
                    <button className='flex gap-2 font-montserrat font-medium text-[#000000] text-base items-center'>
                      <p>Read More</p> 
                      <FaLongArrowAltRight />
                    </button>
                </div>

                <div className='card w-[420px] h-[422px] top-[94px]'>
                    <img src='' alt='' className='w-[420px] h-[220px] bg-[#EFF2FB] mb-4'/>
                    <p className='category w-[52px] h-[11px] font-jost font-bold text-xs mb-4 text-[#000000] border-[1px]'>Fashion</p>
                    <p className='title capitalize mb-4 font-jost font-medium text-2xl text-[#000000]'>a selection of the best travel books for lovers of a quiet holiday</p>
                    <p className='flex font-spartan font-normal text-xs text-[#555555] gap-2 mb-8'>Jul 06, 2021 <FaMinus/>
                    <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
                    <button className='flex gap-2 font-montserrat font-medium text-[#000000] text-base items-center'>
                      <p>Read More</p> 
                      <FaLongArrowAltRight />
                    </button>
                </div>

                <div className='card w-[420px] h-[422px] top-[94px]'>
                    <img src='' alt='' className='w-[420px] h-[220px] bg-[#EFF2FB] mb-4'/>
                    <p className='category w-[52px] h-[11px] font-jost font-bold text-xs mb-4 text-[#000000] border-[1px]'>Fashion</p>
                    <p className='title capitalize mb-4 font-jost font-medium text-2xl text-[#000000]'>a selection of the best travel books for lovers of a quiet holiday</p>
                    <p className='flex font-spartan font-normal text-xs text-[#555555] gap-2 mb-8'>Jul 06, 2021 <FaMinus/>
                    <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
                    <button className='flex gap-2 font-montserrat font-medium text-[#000000] text-base items-center'>
                      <p>Read More</p> 
                      <FaLongArrowAltRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topoftheweek