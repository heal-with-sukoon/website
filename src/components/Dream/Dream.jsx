import React from 'react';
import { Link } from 'react-router-dom';
import "./Dream.css"

function Dream() {
  return (
    <div id='Dream' className='bg-custom h-screen flex justify-center items-center'>
      <div className='relative flex flex-col justify-center items-center text-black p-3 md:p-10'>
        <h1 className='text-3xl  sm:text-6xl md:text-5xl lg:text-8xl xl:text-7xl  font-galpike text-center'>
          Try our AI Based
        </h1>
        <img src="/dream/line.svg" alt="line" className='absolute top-3 scale-75 left-72 mb-3 xl:block hidden' />
        <div className='font-RocaHeavyItalic mt-7  text-3xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl text-center'>
          Dream Analyzer
        </div>
        <Link to="/dream-analyzer">
          <button className="mt-10 md:mt-14 px-4 md:px-6 py-2 md:py-3 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-[#42536A] text-white rounded-full hover:bg-[#e0dfdc] hover:text-black transition duration-300">
            Give it a go
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dream;
