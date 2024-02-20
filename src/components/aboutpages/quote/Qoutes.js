import React from 'react'
import quotes from "../../../assets/images/Vector.svg"

const Qoutes = () => {
  return (
    <div className='w-full h-[490px] bg-[#2F007A]'>
        <div className='h-[252px] top-[119px] left-[95px] border-[2.5px] p-[10px] gap-[10px] border-[#FFFFFF]'>
            <div className='w-[48px] h-[36px] text-[#FFFFFF]'>
                <img src={quotes} alt='quotes' />
            </div>
            <div className='w-[868px] h-[120px]'>
                <span className='text-[40px] font-medium leading-[60px] font-montserrat '>Empowering innovation and fostering collaboration - together, we build the future.</span>
            </div>
        </div>
    </div>
  )
}


export default Qoutes