import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function Audio() {
    const audios = [
        {
            img: "/AV/Frame.svg",
            song : "/Therapy/test.mp3"
        },
        {
            img: "/AV/Frame5.svg",
            song : "/Therapy/test.mp3"
        },
        {
            img: "/AV/Frame6.svg",
            song : "/Therapy/test.mp3"
        },
        {
            img: "/AV/Frame2.svg",
            song : "/Therapy/test.mp3"
        },
        {
            img: "/AV/Frame3.svg",
            song : "/Therapy/test.mp3"
        },
        {
            img: "/AV/Frame4.svg",
            song : "/Therapy/test.mp3"
        },
    ];

    const handleopen = (audio) => {
        const player = document.getElementsByClassName('player');
        if (player) {
            player.src = audio;
            player.autoplay = true;
        }
    };

    return (
        <div className='bg-[#F3F3F9]'>
            <div className='flex justify-center items-center pt-14 flex-wrap'>
                <img src="/AV/head.svg" alt="head" className='pr-5' />
                <div className='inline-block bg-[#fffbad] relative mt-4 md:mt-0'>
                    <div className='font-Rspring text-3xl md:text-5xl text-center md:text-left'>
                        Take a Break from <span className='text-[#0E176E] relative'>Screen</span>
                        <img src="/AV/line.svg" alt="line" className='hidden md:block absolute left-96 top-4' />
                    </div>
                </div>
            </div>

            <ReactAudioPlayer
                src="/Meditation/test.mp3"
                controls
                className='player scale-110 mt-8 block sm:hidden ml-16'
            />

            <div className='flex justify-center items-center py-16 flex-wrap'>
                {audios.map((audio, index) => (
                    <img 
                        key={index}
                        src={audio.img}
                        alt= "image"
                        className='pr-6 cursor-pointer mb-4 md:mb-0'
                        onClick={() => handleopen(audio.song)}
                    />
                ))}
            </div>
            <div className='flex justify-center'>
                <ReactAudioPlayer
                    src="/Meditation/test.mp3"
                    controls
                    className='player scale-125 mb-14 hidden sm:block'
                />
            </div>
        </div>
    );
}

export default Audio;