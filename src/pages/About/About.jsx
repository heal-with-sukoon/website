import React from 'react'
import Service from '../../components/Service/Service'
import Breathe from '../../components/About/Breathe/Breathe'

function About() {
  return ( 
    <div>
      <div className='bg-[#E3DFF8] flex flex-wrap md:flex-nowrap'>
        <div className='flex px-0 md:px-10'><Breathe /></div>
        <div className='text-xl md:text-3xl flex items-center pb-5 px-10 md:mt-10 md:mb-20 md:px-20'>Welcome to Sukoon! 
          <br></br><br/>
          Your one of a kind safe space for mental health. With a beautifully crafted fusion of AI in the field of mental health , something truly special to help and support you. It's more than just a place to book therapy sessions; it's a resource designed to help you find peace and balance using the power of technology. Whether you're looking for professional support, tools to lift your mood, or helpful information, Sukoon is here for you, with special support available for young adults and teenagers.

          <br></br> <br></br>
          
          Find your Sukoon Now 🌻
        </div>
      </div>
      <div className='lg:block hidden'>
        <div className='text-[#3A409F]  font-Roca text-5xl text-center p-4 font-bold'>Explore Sukoon More</div>
        <Service />
      </div>

    </div>
  )
}

export default About