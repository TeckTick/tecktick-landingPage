import React from 'react'
import deloitte from '../assets/images/deloitte.jpg'
import bbc from '../assets/images/bbc.jpg'
import uon from '../assets/images/unon.jpg'
import unilever from '../assets/images/unilever.jpg'

const OurPartners = () => {
  return (
    <div className='PH'>
      <div className='partner'>
        <div className='1partner'>
          <img src={bbc} alt='bbc' />
        </div>
        <div className='2partner'>
          <img src={uon} alt='bbc' />
        </div>
        <div className='3partner'>
          <img src={unilever} alt='bbc' />
        </div>
        <div className='4partner'>
          <img src={deloitte} alt='bbc' />
        </div>
      </div>
      <hr className='w-5/4'/>
      <div className='howitworks'>
        <h3 className='text-center'>HOW IT WORKS</h3>
        <div className='container'>
          <div className='con1'>
            <span>Icon</span>
            <h2>Title Goes here</h2>
            <p>Lorem ipsum dolor sit armet</p>
          </div>
          <div className='con2'>
            <span>Icon</span>
            <h2>Title Goes here</h2>
            <p>Lorem ipsum dolor sit armet</p>
          </div>
          <div className='con3'>
            <span>Icon</span>
            <h2>Title Goes here</h2>
            <p>Lorem ipsum dolor sit armet</p>
          </div>
          <div className='con4'>
            <span>Icon</span>
            <h2>Title Goes here</h2>
            <p>Lorem ipsum dolor sit armet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPartners