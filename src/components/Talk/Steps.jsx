import React from 'react'

function Steps() {
    return (
        <div className='p-20'>
            <div className='rounded-xl shadow-lg inline-block bg-[#695E91] mb-14 mx-44 flex justify-center'>
                <div className=' text-white text-4xl font-medium p-6 text-center'>labore et dolore magna aliqua. Ut enim ad minim veniam dolore magna aliqua.</div>
            </div>
            <div className='flex justify-around '>

                <div className=''>
                    <img src="/Talk/s1.svg" alt="s1" className='scale-75' />
                    <div className='text-[#695E91] text-3xl font-medium'>
                        Get Verified   </div>
                    <div className='text-center text-xl mt-4'><a className="link link-primary">Click Here.</a> Get Your <div className='pt-1'>Student Id Verified.</div></div>
                </div>
                <div className='relative px-20'>
                    <img src="/Talk/s2.svg" alt="s2" className='scale-75' />
                    <div className='absolute text-[#695E91] text-3xl text-center font-medium'>
                        Get Coupon Code   </div>
                    <div className='absolute text-xl mt-14 text-center'>Check Your Email Inbox
                        For The Special Student Coupon Code.</div>
                </div>
                <div className='reative'>
                    <img src="/Talk/s3.svg" alt="s3" className='scale-75' />
                    <div className='absolute text-[#695E91] text-3xl text-center  font-medium'>
                        Avail The Offer   </div>
                    <div className='text-xl mt-14 '>Enter Received Coupon Code <br /> While Booking Therapy <a className="link link-primary">Here.</a></div>
                </div>

            </div>

        </div>
    )
}

export default Steps