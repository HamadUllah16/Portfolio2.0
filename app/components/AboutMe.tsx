'use client'
import { motion } from "motion/react";


function AboutMe() {
    return (
        <div className="flex flex-col gap-3">
            <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-2xl font-bold'>
                About Me
            </motion.h3>
            <motion.div
                className="p-5 sm:py-1 max-sm:py-3 flex flex-col gap-3"
                variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: { opacity: 1, x: 0, transition: { staggerChildren: 0.7, type: 'keyframes' } },
                }}
                exit={{
                    opacity: 0,
                    x: 40
                }}
                initial='hidden'
                animate='show'
            >
                <p>
                    I am a <strong>Software Engineer</strong> with a passion for designing and building user-centric applications that deliver exceptional user experiences. My journey in tech began in 2022 as a Front-End Developer, where I initially struggled with building effective, intuitive and usable applications but as time passed, I learned how to overcome these challenges.
                </p>
                <p>
                    Currently, I am working at <strong className="border px-2 rounded-lg bg-gray-300">Grayhat Developers</strong> as an Associate Software Engineer.
                </p>
            </motion.div>
        </div>
    );
}

export default AboutMe;
