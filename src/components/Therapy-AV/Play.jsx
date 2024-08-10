import React from 'react'
import './Play.css'

function Play() {
    const openModal1 = () => document.getElementById('my_modal_1').showModal();
    const openModal2 = () => document.getElementById('my_modal_2').showModal();

    return (
        <div>
            <div className='bg-blueCustom'>
                <div className='flex flex-col items-center pt-10 md:pt-20 px-4'>
                    <div className='flex items-center flex-wrap justify-center'>
                        <img src="/AV/tab.svg" alt="tab" className=' sm:block hidden w-16 md:w-auto md:scale-75 mr-2 md:mr-5' />
                        <div className='inline-block bg-[#c3d5f7] rounded px-2 my-4'>
                            <div className='font-Rspring text-[28px] md:text-5xl'>Explore Therapy Videos</div>
                        </div>
                        <img src="/AV/star.svg" alt="star" className='sm:block hidden w-16 md:w-auto md:scale-75 ml-2 md:ml-4 -mt-8 md:-mt-16' />
                    </div>
                </div>

                <div className='bg-bottom-custom pb-5'>
                    <div className="p-4 md:p-5 mb-10 flex flex-wrap justify-center gap-4 md:gap-6 mt-10">
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)] bg-[#4E689B] p-8 h-52 rounded-[40px] flex items-center justify-center cursor-pointer"
                            onClick={openModal1}>
                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 384 512" className="fill-black">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                </svg>
                            </div>
                        </div>

                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)] bg-[#7394C4] p-8 h-52 rounded-[40px] flex items-center justify-center cursor-pointer" onClick={openModal1}>
                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 384 512" className="fill-black">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                </svg>
                            </div>
                        </div>

                        <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] lg:w-[calc(25%-1.5rem)] bg-[#0D1F43] p-8 h-44 rounded-[40px] cursor-pointer flex items-center justify-center" onClick={openModal1}>
                            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512" className="fill-black">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                </svg>
                            </div>
                        </div>

                        <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)] bg-[#A9C6FF] p-8 h-52 rounded-[40px] flex items-center justify-center cursor-pointer" onClick={openModal1}>
                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 384 512" className="fill-black">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                </svg>
                            </div>
                        </div>

                        <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] lg:w-[calc(25%-1.5rem)] bg-[#507FC5] text-white p-8 h-44 rounded-[40px] flex items-center justify-center cursor-pointer" onClick={openModal1}>
                            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512" className="fill-black">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-blueCustom -mt-10 p-6'>
                {/* Content for this section */}
            </div>

            {/* Modals */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-full max-w-3xl">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe src="https://www.youtube.com/embed/60Gnd8Wy0gE?si=upIwaNEocJRZtbWJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Play