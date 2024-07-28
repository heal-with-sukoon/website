import React from 'react'

function Session() {
  return (
    <div>
      <div className='text-center font-rocaLt text-white text-6xl p-10'>
        <div className='pb-4'>Accepting help is its own </div>kind of <span className='font-rocaIt'>Strength</span>
      </div>
      <div className='flex'>
        <div className='py-16 pl-24 relative'>
          <div className='bg-white rounded-[67px] w-2/3 h-96 absolute'></div>
          <img src="/session/man.svg" alt="man" className='w-3/4 relative -top-9 -left-3 z-10' />
        </div>
        <div>
          <div className='text-white text-5xl mt-28 ml-28'>
            "It is possible to <div className='font-betofin pt-5 underline'>Smile Again"</div>
            <button className=" ml-16 mt-16  px-6 py-3 text-2xl bg-transparent border-4 border-[#DFDBF4] text-black rounded-full hover:bg-[#DFDBF4] hover:text-black transition duration-300  hover:text-medium ">
              Book A Session
            </button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Session