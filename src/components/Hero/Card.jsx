import React, { useState, useEffect } from 'react'

function Card() {
    const [currentIndex, setCurrentIndex] = useState(0)


    const content = [
        {
            img: "/Famous/Swift.svg",
            line: "Today is never too late to be brand new.",
            by: "-Taylor swift",
            movie: "",
        },
        {
            img: "/Famous/khan.svg",
            line: "Tum agar khul ke ro nahi sakogi, toh khul kar hass kaise paogi.",
            by: "-Dr.Jehangir",
            movie: "(Dear Zindagi)",
        },
        {
            img: "/Famous/sang.svg",
            line: "You should not be embarrassed about being sad.",
            by: "-Moon sang Tae",
            movie: "(Its okay not to be okay)",
        },
        {
            img: "/Famous/Bhatt.svg",
            line: "Mental health is a serious issue. There is nothing wrong in getting a therapy.",
            by: "-kaira",
            movie: "(Dear Zindagi)",
        },
        {
            img: "/Famous/deepika.svg",
            line: "Anxiety,depression and panic attacks are not signs of weakness but of remaining strong for way too long.",
            by: "-Deepika Padukone",
            movie: "",
        },
        {
            img: "/Famous/kapoor.svg",
            line: "Pasand nhi aayi ending? to badal do. Tumhari apni kahani  hi to hai.",
            by: "-Ved",
            movie: "(Tamasha)",
        },
        {
            img: "/Famous/rock.svg",
            line: "You are not the first to go through it; you are not going to be the last to go through it.",
            by: "- The Rock",
            movie: "",
        },

    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length)
        }, 2500) 

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex justify-center scale-90 sm:scale-95 lg:scale-100 mb-10 sm:mb-15 lg:mb-20 mt-10 sm:mt-15 lg:mt-20 overflow-hidden">
            <div className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[500px] h-[320px] sm:h-[360px] md:h-[400px] lg:h-[400px] overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {content.map((card, index) => (
                        <CardContent key={index} card={card} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function CardContent({ card, index }) {
    return (
        <div className='relative w-full sm:w-[450px] md:w-[500px] lg:w-[500px] h-[320px] sm:h-[360px] md:h-[400px] lg:h-[400px] flex-shrink-0 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] bg-[#81CF95] border-white border-4 sm:border-6 lg:border-8 shadow-lg inset-0 z-10 overflow-hidden' >
            <div className='flex justify-around items-end'>
                <div>
                    <img src={card.img} alt="pic" className={`h-[224px] sm:h-[252px] md:h-[280px] lg:h-[280px] w-[224px] sm:w-[252px] md:w-[280px] lg:w-[280px] absolute transform object-contain ${getImageClass(index)}`}/>
                </div>
                <div className='ml-24 sm:ml-28 md:ml-32 lg:ml-32'>
                    <div className='flex relative'>
                        <img src="/Famous/c1.svg" alt="comma" className='absolute top-2 sm:top-2 lg:top-3 scale-65 sm:scale-70 lg:scale-75' />
                        <div className='inline mr-3 sm:mr-3 lg:mr-4'>
                            <div className='relative font-Rspring text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium pl-10 sm:pl-12 md:pl-14 lg:pl-14 pt-3 sm:pt-4 md:pt-5 lg:pt-5 right-2'>
                                {card.line}
                                <div><img src="/Famous/c2.svg" alt="comma" className='absolute right-6 sm:right-7 md:right-8 lg:right-8 scale-65 sm:scale-70 lg:scale-75' /></div>
                            </div>
                            <div className='font-rocaLt text-end mt-8 sm:mt-9 md:mt-10 lg:mt-10 mr-4 sm:mr-5 md:mr-6 lg:mr-6 text-xl sm:text-xl md:text-2xl lg:text-2xl'>{card.by}</div>
                            <div className='font-rocaLt mb-3 sm:mb-3 md:mb-4 lg:mb-4 pl-6 sm:pl-7 md:pl-8 lg:pl-8 ml-8 sm:ml-9 md:ml-10 lg:ml-10 text-end text-xl sm:text-xl md:text-2xl lg:text-2xl mr-2'>{card.movie}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getImageClass(index) {
    const classes = [
        'left-3 sm:left-3 md:left-4 lg:left-4 -bottom-[2px] sm:-bottom-[2px] md:-bottom-[3px] lg:-bottom-[3px]',
        'left-0 -bottom-3 sm:-bottom-3 md:-bottom-4 lg:-bottom-4',
        '-left-4 sm:-left-4 md:-left-5 lg:-left-5 bottom-0',
        '-left-9 sm:-left-10 md:-left-12 lg:-left-12 bottom-0 scale-x-[-1] box-border object-contain',
        '-left-10 sm:-left-12 md:-left-14 lg:-left-14 bottom-0 scale-x-[-1]',
        'left-0 bottom-0',
        '-left-[23px] sm:-left-[27px] md:-left-[31px] lg:-left-[31px] bottom-0'
    ]
    return classes[index] || ''
}

export default Card