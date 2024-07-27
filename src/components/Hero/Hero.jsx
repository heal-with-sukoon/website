import React from 'react'
import Carousel from './Carousel'

function Hero() {
    return (
        <section className="bg-[#122620] rounded-bl-[299px] shadow-shd ">
            <div className="flex flex-row ml-36 ">

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
                    <div className="text-7xl font-mioge mb-6 text-[#F5D9D6]">Mental Health.</div>

                    <button className=" mb-12 px-6 py-3 text-2xl bg-transparent border-2 border-[#F5D9D6] text-white rounded-full hover:bg-[#F5D9D6] hover:text-black transition duration-300 ml-24 hover:text-medium">
                        Wanna Talk About It?
                    </button>

                </div>


                <div className="w-3/5 mt-14 ">
                    <Carousel />
                </div>
            </div>


        </section>
    )
}

export default Hero