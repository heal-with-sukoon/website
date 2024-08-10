import React from 'react';
import { Link } from 'react-router-dom';
function Dost() {
    return (
        <div className='p-4'>
            <div className='flex flex-col md:flex-row justify-around'>
                <div className=''>
                    <div className='font-tan text-4xl sm:text-5xl md:text-6xl text-white p-6 md:p-14 pt-10 md:pt-20 text-shadow-custom' >
                        Youth Support Corner: <span className='text-[#878eff]'></span> <div className='mt-10'>A safe space for your young adults and teens.</div>
                    </div>
                    <Link to= '/talk-with-ai' >
                        <button className="mt-4 md:ml-56 mb-14 px-4 py-2 md:px-6 md:py-3 text-2xl sm:text-3xl md:text-4xl bg-white border-2 border-black text-black hover:font-semibold rounded-full hover:bg-[#e1e3e6] hover:text-black transition duration-300 hover:text-medium">
                            Connect
                        </button>
                    </Link>
                </div>
                <img src="/Dost/dost.svg" alt="dost" className='scale-75 mt-6 md:mt-0' />
            </div>
        </div>
    );
}

export default Dost;
