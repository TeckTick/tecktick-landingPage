import React from 'react';
import border from '../../../assets/images/border.png'
import dp from '../../../assets/images/Ellipse 7.png'
import { FaMinus } from 'react-icons/fa';

const Recent = () => {
  return (
    <div className='flex justify-center mb-24'>
      <div className='w-[1320px] h-[1048px] top-[1153px] items-center'>
        <div className='flex mb-8 mt-6'>
        <h2 className='gap-[20px] h-[53px] font-jost font-medium text-5xl text-[#000000]'>Recent posts</h2>
        <img src={border} alt='' className='w-[1013px] h-[8px] mt-7'/>
        </div>
        <div className='flex gap-10'>
          <div className='grid grid-row-3 gap-6'>
            <div className='flex flex-row w-[963px] h-[305px] top-[93px] border border-[#0000001A]'>
              <div className='bg-[#EFF2FB]'>
                <p className='w-[56px] h-[21px] top-[20px] left-[20px] gap-3 p-[5px,10px,5px,10px]'>HOME</p>
                <img src='' alt='img' className='w-[360px] h-[305px]'/>
              </div>
              <div className='content px-10 mt-[50px]'>
                <h3 className='font-jost font-medium text-3xl text-[#000000] top-[38px] left-[400px] mb-3 mr-2'>modern style for young fashionistas spring autumn</h3>
                <p className='font-Spartan font-normal text-base text-[#555555] top-[129px] left-[400px] mb-3 mr-2'>A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back on the ...</p>
                <p className='flex font-spartan font-normal text-xs text-[#555555] gap-3'>Jul 06, 2021 <FaMinus className='text-[#000000] mt-1'/><img scr={dp} alt='' className='w-[16px] h-[16px]'/> Arlene McCoy</p>
              </div>
            </div> 

            <div className='flex flex-row w-[963px] h-[305px] top-[93px] border border-[#0000001A]'>
              <div className='bg-[#EFF2FB]'>
                <p className='w-[56px] h-[21px] top-[20px] left-[20px] gap-3 p-[5px,10px,5px,10px]'>HOME</p>
                <img src='' alt='img' className='w-[360px] h-[305px]'/>
              </div>
              <div className='content px-10 mt-[50px]'>
                <h3 className='font-jost font-medium text-3xl text-[#000000] top-[38px] left-[400px] mb-3 mr-2'>modern style for young fashionistas spring autumn</h3>
                <p className='font-Spartan font-normal text-base text-[#555555] top-[129px] left-[400px] mb-3 mr-2'>A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back on the ...</p>
                <p className='flex font-spartan font-normal text-xs text-[#555555] gap-3'>Jul 06, 2021 <FaMinus className='text-[#000000] mt-1'/><img scr={dp} alt='' className='w-[16px] h-[16px]'/> Arlene McCoy</p>
              </div>
            </div> 

            <div className='flex flex-row w-[963px] h-[305px] top-[93px] border border-[#0000001A]'>
              <div className='bg-[#EFF2FB]'>
                <p className='w-[56px] h-[21px] top-[20px] left-[20px] gap-3 p-[5px,10px,5px,10px]'>HOME</p>
                <img src='' alt='img' className='w-[360px] h-[305px]'/>
              </div>
              <div className='content px-10 mt-[50px]'>
                <h3 className='font-jost font-medium text-3xl text-[#000000] top-[38px] left-[400px] mb-3 mr-2'>modern style for young fashionistas spring autumn</h3>
                <p className='font-Spartan font-normal text-base text-[#555555] top-[129px] left-[400px] mb-3 mr-2'>A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back on the ...</p>
                <p className='flex font-spartan font-normal text-xs text-[#555555] gap-3'>Jul 06, 2021 <FaMinus className='text-[#000000] mt-1'/><img scr={dp} alt='' className='w-[16px] h-[16px]'/> Arlene McCoy</p>
              </div>
            </div> 
          </div>







          <div className='w-[307px] h-[837px] top-[93px] left-[1013px]'>
            <div className='w-[307px] h-[259px] top-[671px] left-[1013px]'>
              <div className='w-[307px] h-[150px] bg-[#EFF2FB]'>img</div>
              <div className=''>
                <p className='flex font-spartan font-normal text-xs text-[#555555] gap-1'>Jul 06, 2021<FaMinus className='text-[#000000] mt-1'/> #travel</p>
                <p className='font-jost font-medium text-xl text-[#000000]'>how not to get lost without knowing the language</p>
              </div>
            </div>
            <div className='w-[307px] h-[259px] top-[671px] left-[1013px]'>
              <div className='w-[307px] h-[150px] bg-[#EFF2FB]'>img</div>
              <div className=''>
                <p className='flex font-spartan font-normal text-xs text-[#555555] gap-1'>Jul 06, 2021<FaMinus className='text-[#000000] mt-1'/> #travel</p>
                <p className='font-jost font-medium text-xl text-[#000000]'>how not to get lost without knowing the language</p>
              </div>
            </div>
            <div className='w-[307px] h-[259px] top-[671px] left-[1013px]'>
              <div className='w-[307px] h-[150px] bg-[#EFF2FB]'>img</div>
              <div className=''>
                <p className='flex font-spartan font-normal text-xs text-[#555555] gap-1'>Jul 06, 2021<FaMinus className='text-[#000000] mt-1'/> #travel</p>
                <p className='font-jost font-medium text-xl text-[#000000]'>how not to get lost without knowing the language</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
