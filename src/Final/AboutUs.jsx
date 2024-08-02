import React from 'react';


import { SocialIcon } from 'react-social-icons'
const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white h-screen">

      <div className="flex-1 flex flex-col justify-center items-start px-10 ">
        <div className='text-end ml-52 -mt-24'>
        <div className="text-8xl font-bold font-hanoble">ABOUT</div>
        <div className="mt-3 text-8xl font-light mb-8 font-Bspring">US</div>
        </div>
        <p className="text-lg">
          A LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
          UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
          DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.
        </p>
      </div>

      <img src="/AboutUs/BLine.svg" alt="line" className='mr-5' />

      <div className=''>
        <div className='flex '>
          <div className='mr-3 mt-6 ml-14'>
            <img src="/AboutUs/LinkedIn.svg" alt="linkedin" className='cursor-pointer' />
            <div  className='py-2 font-medium'>MORGAN <br /> MAXWELl</div>
            <img src="/AboutUs/SLine.svg" alt="l" />
            <div className='mt-2 font-semibold text-2xl font-Rspring'>CEO</div>
          </div>
          <img src="/AboutUs/w1.svg" alt="women" className='bg-yellow-500 h-[319px] border-black border-x-4 border-b-4' />
        </div>

        <div className='flex '>
          <div className='mr-3 mt-10  ml-14'>
          <img src="/AboutUs/LinkedIn.svg" alt="linkedin" className='cursor-pointer' />
            <div  className='py-2 font-medium'>MORGAN <br /> MAXWELl</div>
            <img src="/AboutUs/SLine.svg" alt="l" />
            <div className='mt-2 font-semibold text-2xl font-Rspring'>CEO</div>
          </div>
          <img src="/AboutUs/w1.svg" alt="women" className='bg-red-500 h-[319px] border-black border-x-4 border-b-4' />
        </div>
      </div>

      <div className='ml-20'>
        <div className='flex '>
          <div className='-ml-3  mr-3 mt-32'>
          <img src="/AboutUs/LinkedIn.svg" alt="linkedin" className='cursor-pointer' />
            <div className='py-2 font-medium'>MORGAN <br /> MAXWELl</div>
            <img src="/AboutUs/SLine.svg" alt="l" />
            <div className='mt-2 font-semibold text-2xl font-Rspring'>Project <br />Manager</div>
          </div>
          <img src="/AboutUs/w1.svg" alt="women" className='bg-yellow-500 h-[319px] border-black border-x-4 border-b-4' />
        </div>
        <div className='flex '>
          <div className='-ml-3 mr-3 mt-32' >
          <img src="/AboutUs/LinkedIn.svg" alt="linkedin" className='cursor-pointer' />
            <div  className='py-2 font-medium'>MORGAN <br /> MAXWELl</div>
            <img src="/AboutUs/SLine.svg" alt="l" />
            <div className='mt-2 font-semibold text-2xl font-Rspring'>Graphics <br />Designer</div>
          </div>
          <img src="/AboutUs/w1.svg" alt="women" className='bg-red-500 h-[319px] border-black border-x-4 border-b-4' />
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
