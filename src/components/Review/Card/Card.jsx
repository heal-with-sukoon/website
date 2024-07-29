'use client';
import React from 'react';
import { motion, useTransform } from 'framer-motion';

function Card({ i, title, description, color, progress, range, targetScale, zIndex }) {
    const scale = useTransform(progress, range, [1, targetScale]);
    const zIndexValue = useTransform(progress, range, [zIndex, zIndex + 1]);

    return (
        <div className='h-screen flex items-center justify-center sticky top-0 -mt-10'>
            <motion.div
                className={`scale ${color} h-2/5 w-2/6 relative rounded-[36px]`}
                style={{ scale, zIndex: zIndexValue, top: `calc(-10% + ${i * 25}px)` }}
            >
                <img src="/Review/review.svg" alt="comma" className='p-7' />
                <div className='text-2xl pl-5 mr-1'>{description}</div>
                <div className='text-2xl font-hanoble ml-56 p-7'>- {title}</div>
            </motion.div>
        </div>
    );
}

export default Card;
