import React from 'react'
import Carousel from './Carousel'
import HelpCard from './HelpCard'

function Help() {
  return (
    <div className='flex'>
      <div className='relative'>
        <img src="/Brain/Brain.svg" alt="brain" className='p-12 pl-20' />
        <div className='absolute inset-0 flex flex-col justify-center '>
          <div className='text-6xl font-betofin ml-40'>
            <div className='p-1'>Who do you</div>
            <div className='p-1'>think needs</div>
            <div className='p-1 '>help?</div>
          </div>
        </div>
      </div>
      
      <HelpCard/>
      
                   
                
    </div>

  )
}

export default Help