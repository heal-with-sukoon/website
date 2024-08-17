import React, { useState } from 'react';

function Video() {
    const openModal1 = () => document.getElementById('my_modal_1').showModal();
    const openModal2 = () => document.getElementById('my_modal_2').showModal();

    return (
        <div className="px-20 mb-10 mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
                
                {/* First Row */}
                <div 
                    className="col-span-3 bg-[#0D1E44] p-8 h-52 bg-[url('/Meditation/n1.svg')] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center cursor-pointer"
                    onClick={openModal1}
                >
                    <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>                
                </div>

                <div 
                    className="col-span-3 bg-[#0D1E44] p-8 h-52 bg-[url('/Meditation/n2.svg')] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center cursor-pointer"
                    onClick={openModal1}
                >
                    <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>                
                </div>
                
                {/* Second Row */}
                <div className="sm:block text-white hidden col-span-2 bg-[#4C5DB5] p-8 rounded-[40px] flex items-center justify-center">
                    <img src="/Meditation/mod.svg" alt="sad" />
                </div>

                <div className="col-span-2 text-white bg-[#7A75BC] p-8 rounded-[40px] flex items-center justify-center">
                <img src="/Meditation/calm.svg" alt="sad" />
                </div>

                <div className="col-span-2 bg-[#4C5DB5] text-white p-8 rounded-[40px] flex items-center justify-center">
                <img src="/Meditation/happy.svg" alt="sad" />
                </div>
                
                {/* Third Row */}
                <div 
                    className="col-span-3 bg-[#0D1E44] p-8 bg-[#0D1E44] p-8 h-52 bg-[url('/Meditation/n3.svg')] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center cursor-pointer"
                    onClick={openModal2}
                >
                    <div className="h-14 w-14 rounded-full m-10 bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>

                <div 
                    className="col-span-3 bg-[#0D1E44] p-8 rounded-[40px] bg-[#0D1E44] p-8 h-52 bg-[url('/Meditation/n4.svg')] bg-no-repeat bg-cover flex items-center justify-center cursor-pointer"
                    onClick={openModal2}
                >
                    <div className="h-14 w-14 rounded-full m-10 bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>

                {/* Modals */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-full max-w-3xl">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/60Gnd8Wy0gE?si=upIwaNEocJRZtbWJ&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>

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
        </div>
    )
}

export default Video;
