import React from 'react'
import Card from './Card'

function Hero() {
    return (
        <section className="bg-[#122620] rounded-bl-[150px] md:rounded-bl-[200px] lg:rounded-bl-[299px] shadow-shd">
            <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0">
                <div className="text-white mt-10 lg:mt-20 mb-10 lg:mb-0 text-center lg:text-center lg:ml-20">
                    <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-rocaThI relative">
                        Helping you <span className=''>Heal</span> with
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl mt-6 lg:mt-10 mb-8 lg:mb-14 font-rocaThI">
                        The <span className='text-[#F5F5A0] underline decoration-2 decoration-[#81CF95] underline-offset-4'>Magic Of Technology</span>
                    </div>
                    <button className="mb-8 lg:mb-14 px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl lg:text-2xl bg-transparent border-2 border-[#F5D9D6] text-white rounded-full hover:font-semibold hover:bg-[#F5D9D6] hover:text-black transition duration-300 lg:ml-24 hover:text-medium">
                        Wanna Talk About It?
                    </button>
                </div>
                <div className="w-[375px] mx-4 mb-20 -mt-16 sm:pt-10 sm:mx-auto md:max-w-[90%] lg:w-auto">
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Hero