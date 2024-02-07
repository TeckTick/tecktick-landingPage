import React from 'react'
import { Switch } from '@material-tailwind/react'
import { Button } from 'react-scroll'
import tecktick from '../assets/images/tecktick.png'

const Herosection = () => {
  return (
    <div className='hero mx-auto pt-16'>
      <div className='grid grid-cols-6 justify-items-center items-center ml-12'>
        <div className='w-4/5 pl-24'>
          <Switch defaultChecked />
          <h3 className='text-5xl font-Roboto font-bold no-underline align-middle tracking-wide normal-case leading-normal text-dark mt-4'>Teamwork Makes <br/> The Dream Work</h3>
          
        </div>
        <div className='mt-4'>
          <p className='w4/5  font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl'>Tell the world how awesome your site is and why they <br/> should use it it!! Tell the world how awesome your site is <br/> and why they should use it</p>
        </div>
        <div className='flex pushable pb-20'>
          <div>
            <Button className='front mt-4'>Get Start</Button>
          </div>
          <div> 
            <Button className='front mt-4'>Explore Community</Button>
          </div>
        </div>
      </div>
      <div className='img-screenshot'>
        <img className="h-12 justify-items-center items-center" src={tecktick}/>
      </div>
    </div>
  )
}

export default Herosection