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
        }, 3000) 

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex justify-center scale-105 mb-20 mt-20 overflow-hidden">
            <div className="relative w-[500px] h-[400px] overflow-hidden">
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
        <div className='relative w-[500px] h-[400px] flex-shrink-0 rounded-[50px] bg-[#81CF95] border-white border-8 shadow-lg inset-0 z-10 overflow-hidden' >
            <div className='flex justify-around items-end'>
                <div >
                    <img src={card.img} alt="pic" className={`h-[280px] w-[280px] absolute transform object-contain ${getImageClass(index)}`}/>
                </div>
                <div className='ml-32'>
                    <div className='flex relative'>
                        <img src="/Famous/c1.svg" alt="comma" className='absolute top-3 scale-75' />
                        <div className='inline mr-4'>
                            <div className='relative  font-Rspring text-white text-4xl font-medium pl-14 pt-5 right-2'>
                                {card.line}
                                <div><img src="/Famous/c2.svg" alt="comma" className='absolute right-8 scale-75' /></div>
                            </div>
                            <div className='font-rocaLt text-end mt-10 mr-6 text-2xl'>{card.by}</div>
                            <div className='font-rocaLt mb-4 pl-8 ml-10 text-end text-2xl mr-3'>{card.movie}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getImageClass(index) {
    const classes = [
        'left-4 -bottom-[3px]',
        'left-0 -bottom-4',
        '-left-5 bottom-0',
        '-left-12 bottom-0 scale-x-[-1] box-border object-contain',
        '-left-14 bottom-0 scale-x-[-1]',
        'left-0 bottom-0',
        '-left-[31px] bottom-0'
    ]
    return classes[index] || ''
}

export default Card