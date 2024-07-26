import React from 'react'
import Carousel from './Carousel'

function Hero() {
    return (
        <section className="bg-[#122620] flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-6xl">

                <div className="lg:w-1/2 text-white -mt-44 -ml-20 ">
                    <div className="text-6xl mb-4 font-galpike">
                        You’re <span className="font-galpike">Not Alone</span> In<div className='mt-4'>This Journey</div>
                    </div>
                    <div className="text-3xl mb-6 font-galpike">Prioritize your</div>
                    <div className="text-5xl font-serif mb-6">Mental Health.</div>

                    <button className="mt-8 px-6 py-3 text-xl bg-transparent border-2 border-[#F5D9D6] text-white rounded-full hover:bg-[#F5D9D6] hover:text-black transition duration-300 ml-24">
                        Wanna Talk About It?
                    </button>

                </div>


                <div className="lg:w-1/2 flex lg:justify-end -mt-28 ">
                <Carousel/>
                </div>
            </div>


        </section>
    )
}

export default Hero