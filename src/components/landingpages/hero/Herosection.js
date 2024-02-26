import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import tecktick from '../assets/images/tecktick.png'

const Herosection = () => {
  return (
   <div className='home-container'>
    <div className='home-banner-container flex flex-row'>
      <div className='home-text-section'>
        <h1 className='primary-heading'>Teamwork Makes <br/> The Dream Work</h1>
        <p className='primary-text'> Level Up Your Tech Game -  <br/> Warp into TeckTick's Universe ! <br/>
        </p>
     <div className='flex flex-row secondary-button '>
       <button >Get Started <ArrowRightAltIcon/> </button>
       <button className='ml-4'>Explore Community</button>
     </div>
    </div>
    <div className='home-image-container'>
     <img src= {tecktick} alt='tecktick '/>
    </div>
    </div>
   </div>
  )
}

export default Herosection