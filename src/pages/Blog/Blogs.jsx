import React, { useState, useEffect } from 'react';

function Blogs() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openBlog = (blog) => {
        setSelectedBlog(blog);
        setTimeout(() => setIsModalOpen(true), 10);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedBlog(null), 300);
    };

    const blogs = [
        {
            img: "/blog/b1.svg",
            title: "JEE Journey",
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum odit eveniet voluptatem eum vitae earum molestiae dolores aliquid deserunt, incidunt voluptates fuga. Provident in voluptate, illum architecto facilis modi.',
            catchy: "It was way tougher. Consistency and revision are the keys.",
            writer : "curious dev",
            date : "Jun 2024"
        },
        {
            img: "/blog/b1.svg",
            title: "First Day at School",
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum odit eveniet voluptatem eum vitae earum molestiae dolores aliquid deserunt, incidunt voluptates fuga. Provident in voluptate, illum architecto facilis modi.',
            catchy: "It was weird, and I thought it would be boring, but it was interesting.",
            writer : "curious dev",
            date : "Jun 2024"
        },
        {
            img: "/blog/b1.svg",
            title: "Board Exams",
            catchy: "PYQs and practice are the keys.PYQs and practice are the keys.",
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum odit eveniet voluptatem eum vitae earum molestiae dolores aliquid deserunt, incidunt voluptates fuga. Provident in voluptate, illum architecto facilis modi.',
            writer : "curious dev",
            date : "Jun 2024"
        },
        {
            img: "/blog/b1.svg",
            title: "JEE Journey",
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum odit eveniet voluptatem eum vitae earum molestiae dolores aliquid deserunt, incidunt voluptates fuga. Provident in voluptate, illum architecto facilis modi.',
            catchy: "It was way tougher. Consistency and revision are the keys.",
            writer : "curious dev",
            date : "Jun 2024"
        },
        {
            img: "/blog/b1.svg",
            title: "First Day at School",
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum odit eveniet voluptatem eum vitae earum molestiae dolores aliquid deserunt, incidunt voluptates fuga. Provident in voluptate, illum architecto facilis modi.',
            catchy: "It was weird, and I thought it would be boring, but it was interesting.",
            writer : "curious dev",
            date : "Jun 2024"
        },
        {
            img: "/blog/b1.svg",
            title: "Board Exams",
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum odit eveniet voluptatem eum vitae earum molestiae dolores aliquid deserunt, incidunt voluptates fuga. Provident in voluptate, illum architecto facilis modi.',
            catchy: "PYQs and practice are the keys.PYQs and practice are the keys.",
            writer : "curious dev",
            date : "Jun 2024"
        },
    ];

    return (
        <>
            <div className={`p-4 bg-[#C6C1D8] ${isModalOpen ? 'blur-md' : ''}`}>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            onClick={() => openBlog(blog)}
                        >
                            <div className="relative mb-10">
                                <img src={blog.img} alt="img" className="z-0 w-full h-auto" />
                                <div className="mx-7 absolute -bottom-5 left-0 z-10 bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                    <p className="text-gray-700">{blog.catchy}</p>
                                    <div className='text-right'>
                                        <p>- {blog.writer}</p>
                                        <p>{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedBlog && (
                <div 
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black transition-all duration-300 ${
                        isModalOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
                    }`}
                    onClick={closeModal}
                >
                    <div 
                        className={`bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto transition-all duration-300 ${
                            isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-4">{selectedBlog.title}</h3>
                            <p className="mb-6">{selectedBlog.content}</p>
                            <div className="text-right">
                                <button 
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300" 
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Blogs;
