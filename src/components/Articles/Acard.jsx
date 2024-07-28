import React from 'react';
import { Link } from 'react-router-dom';

const Acard = () => {
    const cardData = [
        {
          heading: 'Anxiety',
          writer: 'Arni Sehgal',
          date: 'Nov 2024',
          content: 'Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac sapien. Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac congue primis tortor porttitor et sapien.',
          cardBgColor: 'bg-[#9097FD]',
          sideBgColor: 'bg-[#F7F7A0]',
          articleText: 'Blogs',
          link: '#'
        },
        {
          heading: 'Stress',
          writer: 'John Doe',
          date: 'Oct 2024',
          content: 'Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac sapien. Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac congue primis tortor porttitor et sapien.',
          cardBgColor: 'bg-[#aae3d6]',
          sideBgColor: 'bg-[#F7F7A0]',
          articleText: 'Blogs',
          link: '#'
        },
        {
          heading: 'Depression',
          writer: 'Jane Smith',
          date: 'Sep 2024',
          content: 'Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac sapien. Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac congue primis tortor porttitor et sapien.',
          cardBgColor: 'bg-[#DFCFBE]',
          sideBgColor: 'bg-[#F7F7A0]',
          articleText: 'Blogs',
          link: '#'
        },
        {
          heading: 'ADHD',
          writer: 'Alex Brown',
          date: 'Aug 2024',
          content: 'Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac sapien. Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac congue primis tortor porttitor et sapien.',
          sideBgColor: 'bg-[#F7F7A0]',
          cardBgColor: 'bg-[#c9d19b]',
          articleText: 'Blogs',
          link: '#'
        },
        {
          heading: 'PTSD',
          writer: 'Chris White',
          date: 'Jul 2024',
          content: 'Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac sapien. Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac congue primis tortor porttitor et sapien.',
          cardBgColor: 'bg-[#CBCDFA]',
          sideBgColor: 'bg-[#F7F7A0]',
          articleText: 'Blogs',
          link: '#'
        },
        {
          heading: 'Teen Issues',
          writer: 'Arni Sehgal',
          date: 'Jun 2024',
          content: 'Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac sapien. Conubia ex senectus commodo; facilisis metus vel! Quam nec habitant vehicula tempor felis. Ac congue primis tortor porttitor et sapien.',
          cardBgColor: 'bg-[#deabcf]',
          sideBgColor: 'bg-[#F7F7A0]',
          articleText: 'Blogs',
          link: '#'
        }
      ];
      

  return (
    
    <div className="flex flex-wrap gap-14 justify-center">
      
    {cardData.map((card, index) => (
      <Link to={card.link} key={index} className="block w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
        <div className={`relative p-4 rounded-lg shadow-md ${card.cardBgColor} h-`}>
          <div className={`absolute rounded-bl-3xl top-0 right-0 h-1/2 w-12 ${card.sideBgColor} flex items-center justify-center`}>
            <div className="rotate-90 text-3xl font-bold text-[#122620]">{card.articleText}</div>
          </div>
          <div className=" mr-8 h-full flex flex-col justify-between">
            <div>
            <div className="relative">
            <img src="/Brain/WBrain.svg" alt="brain" className="absolute -mt-4 -ml-4 w-40 h-28 object-cover" />
                <h2 className="text-3xl text-[#122620] font-bold absolute top-0 left-0">{card.heading}</h2>
                
              </div>
              <p className="text-sm text-black ml-36 p-3 mt-10">{card.writer}<br />{card.date}</p>
            </div>
            <p className="mt-7 text-black ml-2">{card.content}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default Acard;


{/* <div key={index} className={`flex ${card.cardBgColor} w-80 p-4 rounded-lg shadow-md relative`}>
<div className={`absolute rounded-bl-3xl top-0 right-0 h-1/2 w-12 ${card.sideBgColor} flex items-center justify-center`}>
  <div className="-rotate-90 text-lg font-bold text-black">{card.articleText}</div>
</div>
<div className="ml-4 mr-4">
  <h2 className="text-3xl font-bold text-black">{card.heading}</h2>
  <p className="text-sm text-black ml-36">{card.writer}<br />{card.date}</p>
  <p className="mt-2 text-black">{card.content}</p>
</div>
</div> */}