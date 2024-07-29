'use client';
import React, { useRef, useEffect } from 'react';
import { projects } from './Data';
import Card from './Card/Card';
import { motion, useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

function Review() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div ref={container} className='relative -mb-24'>
            <div className='text-6xl font-hanoble pt-14 text-center top-0 z-50 bg-white '>
                You Are Not Alone
            </div>
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                        zIndex={projects.length - i}
                    />
                );
            })}
        </div>
    );
}

export default Review;
