import React from 'react'
import Card from './Card'


function Hero() {
    return (
        <section className="bg-[#122620] rounded-bl-[299px] shadow-shd ">
            <div className="flex justify-around  ">

                <div className="text-white mt-44 ">
                    <div className="text-5xl mb-4 font-rocaThI relative ">
                       Helping you <span className=''>Heal</span> with 

                                    {/* <span className="relative"><br />this Journey</span> */}
                    </div>

                    <div className="text-5xl mt-10 mb-14  font-rocaThI">The <span className='text-[#F5F5A0] underline decoration-2 decoration-[#81CF95] underline-offset-4'>Magic Of Technology</span></div>
                    {/* <div className="text-7xl font-mioge mb-6 text-[#F5D9D6]">Mental Health.</div> */}

                    <button className=" mb-14 px-6 py-3 text-2xl bg-transparent border-2 border-[#F5D9D6] text-white rounded-full hover:font-semibold hover:bg-[#F5D9D6] hover:text-black transition duration-300 ml-24 hover:text-medium">
                        Wanna Talk About It?
                    </button>

                </div>

                <div className=" ">
                    <Card />
                </div>
            </div>




        </section >
    )
}

export default Hero