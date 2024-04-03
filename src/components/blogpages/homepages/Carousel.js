import React from 'react';
import { FaMinus } from 'react-icons/fa';
import dp from '../../../assets/images/Ellipse 7.png'
import Marquee from "react-fast-marquee";


const Carousel = () => {
  return (
    <div className='all flex justify-center gap-2'>
        <Marquee gradient={false} speed={60} pauseOnHover={true}>
        <div className='card carouselbg border-[2px] w-[945px] h-[650px] mt-10 mb-40 flex flex-col justify-center items-center'>
            <img src='' alt='' className=''/>
            <div className='content w-[945px] mt-[450px] h-[400px] flex flex-col items-center'>
                <p className='category w-[63px] h-[21px] top-[172px] text-center gap-[10px] bg-[#FFFFFF] font-jost font-bold text-xs text-[#000000]'>Travel</p>
                <p className='title capitalize w-[515px]  font-jost font-medium text-3xl text-[#FFFFFF]'>a set of the most necessary things on vacation</p>
                <p className='date flex gap-2 font-jost font-normal text-xs text-[#FFFFFF]'>Jul 06, 2021 <FaMinus className='mt-1'/> 
                <img src={dp} alt='' className='w-[16px] h-[16px]'/> Marvin McKinney
                </p>
            </div>
        </div>

        <div className='card carouselbg border-[2px] w-[945px] h-[650px] mt-10 mb-40 flex flex-col justify-center items-center'>
            <img src='' alt='' className=''/>
            <div className='content w-[945px] mt-[450px] h-[400px] flex flex-col items-center'>
                <p className='category w-[63px] h-[21px] top-[172px] text-center gap-[10px] bg-[#FFFFFF] font-jost font-bold text-xs text-[#000000]'>Travel</p>
                <p className='title w-[515px]  font-jost font-medium text-3xl text-[#FFFFFF]'>a set of the most necessary things on vacation</p>
                <p className='date flex gap-2 font-jost font-normal text-xs text-[#FFFFFF]'>Jul 06, 2021 <FaMinus className='mt-1'/> 
                <img src={dp} alt='' className='w-[16px] h-[16px]'/> Marvin McKinney
                </p>
            </div>
        </div>

        <div className='card carouselbg border-[2px] w-[945px] h-[650px] mt-10 mb-40 flex flex-col justify-center items-center'>
            <img src='' alt='' className=''/>
            <div className='content w-[945px] mt-[450px] h-[400px] flex flex-col items-center'>
                <p className='category w-[63px] h-[21px] top-[172px] text-center gap-[10px] bg-[#FFFFFF] font-jost font-bold text-xs text-[#000000]'>Travel</p>
                <p className='title w-[515px]  font-jost font-medium text-3xl text-[#FFFFFF]'>a set of the most necessary things on vacation</p>
                <p className='date flex gap-2 font-jost font-normal text-xs text-[#FFFFFF]'>Jul 06, 2021 <FaMinus className='mt-1'/> 
                <img src={dp} alt='' className='w-[16px] h-[16px]'/> Marvin McKinney
                </p>
            </div>
        </div>

        <div className='card carouselbg border-[2px] w-[945px] h-[650px] mt-10 mb-40 flex flex-col justify-center items-center'>
            <img src='' alt='' className=''/>
            <div className='content w-[945px] mt-[450px] h-[400px] flex flex-col items-center'>
                <p className='category w-[63px] h-[21px] top-[172px] text-center gap-[10px] bg-[#FFFFFF] font-jost font-bold text-xs text-[#000000]'>Travel</p>
                <p className='title w-[515px]  font-jost font-medium text-3xl text-[#FFFFFF]'>a set of the most necessary things on vacation</p>
                <p className='date flex gap-2 font-jost font-normal text-xs text-[#FFFFFF]'>Jul 06, 2021 <FaMinus className='mt-1'/> 
                <img src={dp} alt='' className='w-[16px] h-[16px]'/> Marvin McKinney
                </p>
            </div>
        </div>

        <div className='card carouselbg border-[2px] w-[945px] h-[650px] mt-10 mb-40 flex flex-col justify-center items-center'>
            <img src='' alt='' className=''/>
            <div className='content w-[945px] mt-[450px] h-[400px] flex flex-col items-center'>
                <p className='category w-[63px] h-[21px] top-[172px] text-center gap-[10px] bg-[#FFFFFF] font-jost font-bold text-xs text-[#000000]'>Travel</p>
                <p className='title w-[515px]  font-jost font-medium text-3xl text-[#FFFFFF]'>a set of the most necessary things on vacation</p>
                <p className='date flex gap-2 font-jost font-normal text-xs text-[#FFFFFF]'>Jul 06, 2021 <FaMinus className='mt-1'/> 
                <img src={dp} alt='' className='w-[16px] h-[16px]'/> Marvin McKinney
                </p>
            </div>
        </div>
        </Marquee>


    </div>
  );
}

export default Carousel;
