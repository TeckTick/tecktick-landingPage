import React from 'react';
import { FaComment, FaLongArrowAltRight, FaMinus } from "react-icons/fa";
import border from '../../../assets/images/border.png'

const Popular = () => {
  return (
    <div className='flex justify-center mb-24'>
      <div className='capitalize w-[1320px] h-[629px] top-[2276px] left-[300px] gap-6'>
        <div className='flex mb-8 mt-6'>
          <h3 className='font-jost font-medium text-5xl'>Popular Posts</h3>
          <img src={border} alt='' className='w-[1013px] h-[8px] mt-7'/>
        </div>
        <div className='flex gap-20'>
          <div className='grid grid-row-4'>
            <div className='w-[420px] h-[110px] top-[93px] gap-4'>
              <div className='flex gap-5'>
                <img src='' alt='' className='w-[110px] h-[110px] bg-[#EFF2FB]'/>
                <div className='gap-5 pb-5'>
                  <p className='mb-5'>the best indoor plants to create comfort at home</p>
                  <p className='flex font-spartan font-normal text-xs text-[#555555] gap-1'>Jul 06, 2021<FaMinus className='text-[#000000] mt-1'/>#travel<FaMinus className='text-[#000000] mt-1'/><FaComment className='mt-1'/>5</p>
                </div>
              </div>
            </div>

            <div className='w-[420px] h-[110px] top-[93px] gap-4'>
              <div className='flex gap-5'>
                <img src='' alt='' className='w-[110px] h-[110px] bg-[#EFF2FB]'/>
                <div className='gap-5 pb-5'>
                  <p className='mb-5'>the best indoor plants to create comfort at home</p>
                  <p className='flex font-spartan font-normal text-xs text-[#555555] gap-1'>Jul 06, 2021<FaMinus className='text-[#000000] mt-1'/>#travel<FaMinus className='text-[#000000] mt-1'/><FaComment className='mt-1'/>5</p>
                </div>
              </div>
            </div>

            <div className='w-[420px] h-[110px] top-[93px] gap-4'>
              <div className='flex gap-5'>
                <img src='' alt='' className='w-[110px] h-[110px] bg-[#EFF2FB]'/>
                <div className='gap-5 pb-5'>
                  <p className='mb-5'>the best indoor plants to create comfort at home</p>
                  <p className='flex font-spartan font-normal text-xs text-[#555555] gap-1'>Jul 06, 2021<FaMinus className='text-[#000000] mt-1'/>#travel<FaMinus className='text-[#000000] mt-1'/><FaComment className='mt-1'/>5</p>
                </div>
              </div>
            </div>

            <div className='w-[420px] h-[110px] top-[93px] gap-4'>
              <div className='flex gap-5'>
                <img src='' alt='' className='w-[110px] h-[110px] bg-[#EFF2FB]'/>
                <div className='gap-5 pb-5'>
                  <p className='mb-5'>the best indoor plants to create comfort at home</p>
                  <p className='flex font-spartan font-normal text-xs text-[#555555] gap-1'>Jul 06, 2021<FaMinus className='text-[#000000] mt-1'/>#travel<FaMinus className='text-[#000000] mt-1'/><FaComment className='mt-1'/>5</p>
                </div>
              </div>
            </div>

            

          </div>

          <div className='relative'>
            <div className='top-[93px] left-[470px]'>
              <img src='' alt='' className='w-[850px] h-[536px] bg-[#EFF2FB] mb-5'/>
              <div className='absolute top-[256px] left-12'>
                <div className='w-[410px] h-[271px]'>
                  <p className='font-spartan font-normal text-xs text-[#555555] left-[234px] ml-72 gap-4'>Jul 06, 2021 #travel</p>
                  <div className='w-[410px] h-[256px] bg-[#FFFFFF] items-center justify-center p-8 '>
                    <p className='font-medium text-3xl text-[#000000] mb-4'>universal cream for any type of skin</p>
                    <p className='font-normal text-base text-[#555555] mb-4'>A breakdown or a flat tire can happen to anyone at any time, and...</p>
                    <button className='flex gap-2 font-montserrat font-medium text-[#450099] text-base items-center'>
                      <p>Read More</p> 
                      <FaLongArrowAltRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Popular;
