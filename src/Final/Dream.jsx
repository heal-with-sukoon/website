import React from 'react';

function Dream() {
  return (
    <div style={{ position: 'relative', minHeight: '90vh' }}>
      <video
        autoPlay
        muted
        loop
        src="/cloud/clouds.mp4"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
      </video>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className='flex justify-center '>
          <div className=' mt-5 p-2 rounded-xl inline-block bg-white bg-opacity-60'>
            <div className=' text-3xl underline underline-offset-4 font-betofin text-[#0E176E]'>Dream Analyzer</div>
          </div>
        </div>




        <div className='flex justify-around mt-10'>
          <div className="p-4 ml-20">
            <textarea
              placeholder="Please Describe Your Dream In As Much Detail As Possible.&#10;&#10;Include Where The Dream Took Place And The Environment, Summarize The Key Actions And Events, And Share How You Felt Along With Any Symbols Or Recurring Themes."
              className={`w-3/4 h-80 p-7 rounded-[41px] border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xl text-xl placeholder-black resize-none bg-white opacity-60`}
            />
            <button className="ml-24 mb-10 mt-6 px-7 py-2 text-2xl bg-[#0E176E] hover:text-white text-white rounded-full hover:bg-[#101ead] transition duration-300 hover:text-medium">
              Analyze Dream
            </button>
          </div>
          <div>
            <textarea
              readOnly
              placeholder="Your dream analysis will appear here ...😴"
              className={`w-[650px] h-96 p-4 rounded-[41px] border border-blue-300 focus:outline-none focus:ring-2 placeholder:text-xl text-xl placeholder-black resize-none  bg-white opacity-60`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dream