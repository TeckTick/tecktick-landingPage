import React from 'react'
import {FaLongArrowAltRight, FaChevronCircleRight, FaMinus } from 'react-icons/fa'
import dp from '../../../assets/images/Ellipse 7.png'
import border from '../../../assets/images/border.png'


const Mostread = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='all w-[1320px] h-[928px] left-[300px] mb-20 mt-44'>
        <div className='flex mb-8 mt-6 gap-3'>
        <h2 className='capitalize gap-[20px] h-[53px] font-jost font-medium text-5xl text-[#000000]'>most read posts</h2>
        <img src={border} alt='' className='w-[413px] h-[8px] mt-7'/>
        <button className='flex gap-2 font-montserrat font-medium text-[#000000] text-base items-center mr-12'>
        <p>view all posts</p> 
        <FaLongArrowAltRight />
        </button>
        <h3 className='head font-jost font-medium text-5xl text-[#000000]'>Categories</h3>
        </div>

            <div className='flex gap-10'>

            <div className='boxes grid grid-cols-2 gap-2'>
                <div className='card relative'>
                <p className='absolute top-2 left-0 w-[56px] h-[21px] ml-3 gap-3 p-[5px,10px,5px,10px]'>HOME</p>
                    <img src='' alt='' className='w-[466px] h-[235px] bg-[#EFF2FB]'/>
                    <p className='capitalize font-jost font-medium text-2xl text-[#000000] w-[316px] text-center'>how to create a cozy scent in any room using only ...</p>
                    <div className='flex gap-3 mb-4 '><div className='line w-[316px] text-[rgba(0, 0, 0, 0.1)] text-center'/> <FaChevronCircleRight className='bg-[#EFF2FB]'/> </div>
                    <p className='flex font-spartan font-normal text-xs text-[#555555] gap-2 mb-3'>Jul 06, 2021 <FaMinus/>
              <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
                </div>
                <div className='card relative'>
                <p className='absolute top-2 left-0 w-[56px] h-[21px] ml-3 gap-3 p-[5px,10px,5px,10px]'>HOME</p>
                    <img src='' alt='' className='w-[466px] h-[235px] bg-[#EFF2FB]'/>
                    <p className='capitalize font-jost font-medium text-2xl text-[#000000] w-[316px] text-center'>how to create a cozy scent in any room using only ...</p>
                    <div className='flex gap-3 mb-4 '><div className='line w-[316px] text-[rgba(0, 0, 0, 0.1)] text-center'/> <FaChevronCircleRight className='bg-[#EFF2FB]'/> </div>
                    <p className='flex font-spartan font-normal text-xs text-[#555555] gap-2 mb-3'>Jul 06, 2021 <FaMinus/>
              <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
                </div>
                <div className='card relative'>
                <p className='absolute top-2 left-0 w-[56px] h-[21px] ml-3 gap-3 p-[5px,10px,5px,10px]'>HOME</p>
                    <img src='' alt='' className='w-[466px] h-[235px] bg-[#EFF2FB]'/>
                    <p className='capitalize font-jost font-medium text-2xl text-[#000000] w-[316px] text-center'>how to create a cozy scent in any room using only ...</p>
                    <div className='flex gap-3 mb-4 '><div className='line w-[316px] text-[rgba(0, 0, 0, 0.1)] text-center'/> <FaChevronCircleRight className='bg-[#EFF2FB]'/> </div>
                    <p className='flex font-spartan font-normal text-xs text-[#555555] gap-2 mb-3'>Jul 06, 2021 <FaMinus/>
              <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
                </div>
                <div className='card relative'>
                <p className='absolute top-2 left-0 w-[56px] h-[21px] ml-3 gap-3 p-[5px,10px,5px,10px]'>HOME</p>
                    <img src='' alt='' className='w-[466px] h-[235px] bg-[#EFF2FB]'/>
                    <p className='capitalize font-jost font-medium text-2xl text-[#000000] w-[316px] text-center'>how to create a cozy scent in any room using only ...</p>
                    <div className='flex gap-3 mb-4 '><div className='line w-[316px] text-[rgba(0, 0, 0, 0.1)] text-center'/> <FaChevronCircleRight className='bg-[#EFF2FB]'/> </div>
                    <p className='flex font-spartan font-normal text-xs text-[#555555] gap-2 mb-3'>Jul 06, 2021 <FaMinus/>
              <img src={dp} alt='' className='w-[16px] h-[16px]'/> Ralph Edwards</p>
                </div>
                
                
            </div>



            <div className='sidebar w-[307px] h[928px] left-[1013px]'>
                <div className='grid grid-rows-7'>
                <div className='content w-[307px] h-[50px]'>
                    <p className='uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]'>
                    fashion <span className='text-[#555555]'>15</span>
                    </p>
                    <div className="line w-[307px]"></div>
                </div>
                <div className='content w-[307px] h-[50px]'>
                    <p className='uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]'>
                    fashion <span className='text-[#555555]'>15</span>
                    </p>
                    <div className="line w-[307px]"></div>
                </div>
                <div className='content w-[307px] h-[50px]'>
                    <p className='uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]'>
                    fashion <span className='text-[#555555]'>15</span>
                    </p>
                    <div className="line w-[307px]"></div>
                </div>
                <div className='content w-[307px] h-[50px]'>
                    <p className='uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]'>
                    fashion <span className='text-[#555555]'>15</span>
                    </p>
                    <div className="line w-[307px]"></div>
                </div>
                <div className='content w-[307px] h-[50px]'>
                    <p className='uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]'>
                    fashion <span className='text-[#555555]'>15</span>
                    </p>
                    <div className="line w-[307px]"></div>
                </div>
                <div className='content w-[307px] h-[50px]'>
                    <p className='uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]'>
                    fashion <span className='text-[#555555]'>15</span>
                    </p>
                    <div className="line w-[307px]"></div>
                </div>
                <div className='content w-[307px] h-[50px]'>
                    <p className='uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]'>
                    fashion <span className='text-[#555555]'>15</span>
                    </p>
                    <div className="line w-[307px]"></div>
                </div>
                </div>
                <div className='w-[307px] h-[374px] bg-[#EFF2FB]'/>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Mostread