import React from 'react';

function Dream() {
  return (
    <div className='relative bg-[#1D2C33] flex justify-around items-center h-screen'>
      <img src="/dream/cloud3.svg" alt="cloud" className='absolute top-32 -left-1 '/>
      <img src="/dream/cloud.svg" alt="cloud" className='absolute -top-3 left-1/5 '/>
      <img src="/dream/cloud5.svg" alt="cloud" className='absolute top-24 right-0 z-10'/>
      <img src="/dream/cloud.svg" alt="cloud" className='absolute bottom-20 -left-10 scale-75'/>
      <img src="/dream/cloud2.svg" alt="cloud" className='absolute bottom-10 left-96 '/>
      <img src="/dream/cloud2.svg" alt="cloud" className='absolute bottom-32 right-80 '/>
      <img src="/dream/cloud4.svg" alt="cloud" className='absolute -bottom-10 right-1 '/>

      <div className='relative flex flex-col justify-center items-center text-white text-6xl font-galpike p-10'>
        Try our AI Based
        <img src="/dream/line.svg" alt="line" className='absolute top-0 scale-75 ml-60' />
        <div className='font-rocaThI mt-4'>Dream Analyzer</div>
        <button className="mt-14 px-6 py-3 text-2xl bg-[#42536A] text-white rounded-full hover:bg-[#e0dfdc] hover:text-black transition duration-300 hover:text-medium ">
          Tell a Dream
        </button>
      </div>

      <img src="/dream/girl.svg" alt="girl" className='scale-90' />
    </div>
  );
}

export default Dream;
