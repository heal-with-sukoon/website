import React from 'react'
import './Doodle.css'

function Doodle() {
    return (
        <div className='bg-[#EDEBE9] p-20 ' >
            <div className=' relative  flex justify-center align-center font-galpike text-8xl text-white ' style={{ WebkitTextStroke: '2px black' }}>Fun
                <span className='ml-5 z-20 font-bold text-black text-8xl z-10'>Fact

                </span>
                <img src="/Meditation/y-bg.svg" alt="bg" className='absolute scale-[.65] -top-10 right-96' />
            </div>

            <div className='text-center text-3xl m-7'>
                Research shows that Doodling is found helpful in coping with stress.
            </div>

            <div className=' m-20 custom-shadow rounded-[47px] p-10 bg-white font-tan text-3xl'>
                <div className='flex justify-center'>Doodle Your Stress Away
                    <img src="/Meditation/draw.svg" alt="draw" className=' p-2 -mt-12' /></div>
                <img src="/Meditation/line.svg" alt="line" className='my-3 mx-auto' />
                <div className='flex justify-evenly'>
                    <button className="font-betofin mb-10 mt-20 px-7 py-4 text-2xl bg-[#BDAA8C] text-black rounded-[42px] hover:bg-[#bfa478] transition duration-300 hover:text-medium">
                        Lets's Doodle
                    </button>
                    <button className=" font-betofin  mb-10 mt-20 px-7 py-5 text-2xl bg-[#BDAA8C] text-black rounded-[42px] hover:bg-[#bfa478] transition duration-300 hover:text-medium">
                        <div className='flex justify-center align-center'>
                            Magic Draw
                            <img src="/Meditation/magic.svg" alt="magic" className=' p-1 -mt-8' />
                        </div>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Doodle