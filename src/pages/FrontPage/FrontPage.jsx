import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import "../FrontPage/FrontPage.css"
function FrontPage() {
  return (
    <div className='pl-2 shadow-shd  '>
    <Navbar/>
    <Hero/>
  </div>
  
    
  )
}

export default FrontPage