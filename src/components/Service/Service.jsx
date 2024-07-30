import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
    const services = [
        { name: "WANNA TALK ABOUT IT ?", link: "#", bgColor: "bg-[#eba0b1]" },
        { name: "WHO DO YOU THINK NEEDS HELP ?", link: "", bgColor: "bg-[#9097FD]" },
        { name: "BOOK A SESSION", link: "#", bgColor: "bg-[#F5F5A0]" },
        { name: "DIGITAL DETOX", link: "#", bgColor: "bg-[#9BC5C2]" },
        { name: "AI BASED DREAM ANALYZER", link: "#", bgColor: "bg-[#EFDDD8]" },
        { name: "AUDIO AND VIDEO THERAPY", link: "#", bgColor: "bg-[#87CEFA]" }
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="flex animate-scroll">
                {[...services, ...services].map((service, index) => (
                    <Link 
                        key={index}
                        to={service.link}
                        className={`
                            flex-none w-64 h-64 m-4 p-4 rounded-xl shadow-md 
                            flex items-center justify-center text-center cursor-pointer
                            hover:opacity-85 transition-opacity duration-300 
                            font-betofin text-2xl leading-10
                            ${service.bgColor}
                        `}
                    >
                        {service.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Service;



