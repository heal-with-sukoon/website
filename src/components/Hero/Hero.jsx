import React from 'react'
import Carousel from './Carousel'

function Hero() {
    return (
        <section className="bg-[#122620] flex flex-col items-center justify-center ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start ml-28">

                <div className="text-white mt-20 ">
                    <div className="text-5xl mb-4 font-galpike ">
                        You’re  <span className="font-galpike -mb-20">
                            <span >
                                Not Alone In
                            </span>
                            <img src="/underline/under.svg" alt="img" className='-mt-[72px] ml-40 ' />
                        </span><span className='-mt-28'>this Journey</span>
                    </div>
                    <div className="text-4xl mb-6 font-galpike">Prioritize your</div>
                    <div className="text-8xl font-mioge mb-6 text-[#F5D9D6]">Mental Health.</div>

                    <button className="mt-8 mb-20 px-6 py-3 text-2xl bg-transparent border-2 border-[#F5D9D6] text-white rounded-full hover:bg-[#F5D9D6] hover:text-black transition duration-300 ml-24 hover:text-medium">
                        Wanna Talk About It?
                    </button>

                </div>


                <div className=" w-1/2 flex justify-end mt-10 mr-20 ">
                    <Carousel />
                </div>
            </div>


        </section>
    )
}

export default Hero