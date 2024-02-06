import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Howitworks from './Howitworks'
import OurPartners from './OurPartners'
import Features from './Features'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <OurPartners/>
      <Howitworks/>
      <Features/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
        
    </div>
  )
}

export default Main