import React from 'react'
import Service from '../../components/Service/Service'
import Breathe from '../../components/About/Breathe/Breathe'

function About() {
  return (
    <div>
      <div className='bg-[#E3DFF8]  flex '>
        <div className='flex px-10'><Breathe/></div>
        <div className='text-3xl flex items-center px-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id tempore dolore ex facere, praesentium vitae iste eum, officiis rem, veniam impedit? Illo inventore et quaerat quis possimus qui magnam repellendus?</div>
      </div>
        <div className='text-[#3A409F]  font-Roca text-5xl text-center p-4 font-bold'>Explore Exhale More</div>
        <Service/>
    </div>
  )
}

export default About