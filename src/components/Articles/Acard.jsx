import React , {useState} from 'react';
import { cardData } from './Adata';

const Acard = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    setTimeout(() => {
      const modal = document.getElementById("my_modal");
      if (modal) {
        modal.showModal();
        setIsModalOpen(true);
      }
    }, 0);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
    const modal = document.getElementById("my_modal");
    if (modal) {
      modal.close();
    }
  };

  return (

    <div className={`flex flex-wrap gap-14 justify-center ${isModalOpen ? 'blur-md' : ''} `}>

      {cardData.map((card, index) => (
        <div key={index} className="block w-full sm:w-1/3 md:w-1/4 lg:w-1/5 cursor-pointer" onClick={()=>openBlog(card)}>
          <div className={`relative p-4 rounded-lg shadow-md ${card.cardBgColor} `}>
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
              <p className="mt-7 text-black ml-2">{card.catchy}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedBlog && (
                    <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{selectedBlog.heading}</h3>
                            <p className="py-4">{selectedBlog.content}</p>
                            <div className="modal-action">
                                <button className="btn" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </dialog>
                )}
    </div>
  );
};

export default Acard;

