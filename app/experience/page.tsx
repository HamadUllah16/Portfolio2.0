'use client'
import React from 'react'
import Experience from '../components/Experience'
const upwork = '/upwork.png'
const dextro = '/dextro.png'
const grayhat = '/grayhat.png'
import { motion } from 'motion/react'

function ExperiencePage() {

    const experiences = [
        { img: grayhat, from: 'Jan 2025', to: 'Current', techstack: ["NextJS", "ShadCN", "ZuStand"] },
        { img: dextro, from: 'May 2024', to: 'Sep 2024', techstack: ["NextJS", "MUI", "Redux", "Axios", "Figma"] },
        { img: upwork, from: "Sep 2021", to: "Now", techstack: ["HTML", "CSS", "SQL", "WordPress"] }
    ]

    return (
        <div className='flex flex-col gap-3 h-full'>
            <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-2xl text-center font-medium'>
                Work Experience
            </motion.h3>
            <div className='flex relative h-full py-5 sm:py-1 max-sm:py-3'>
                <motion.div
                    className='flex flex-col w-full'
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        show: { opacity: 1, x: 0, transition: { staggerChildren: 0.7, type: 'keyframes' } },
                    }}
                    initial='hidden'
                    animate='show'
                >
                    {experiences.map((experience, index) => {
                        return (
                            <motion.div className='flex gap-10 max-sm:gap-0 last:border-b overflow-hidden' key={index}
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: { opacity: 1 }
                                }}
                            >

                                <motion.div
                                    className='h-40 w-1 relative'
                                >

                                    <motion.div
                                        className='bg-slate-800 w-1 max-sm:z-0 absolute max-sm:top-5 left-2.5 top-0'
                                        initial={{
                                            height: 0,
                                        }}
                                        animate={{
                                            height: '100%'
                                        }}
                                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + index * 0.6, }}
                                    />
                                    <motion.div
                                        className='w-6 h-6 sm:block max-sm:hidden rounded-full bg-slate-800 absolute flex justify-center items-center'
                                        initial={{
                                            scale: 0
                                        }}
                                        animate={{
                                            scale: 1
                                        }}
                                        transition={{ delay: index * 0.4, ease: 'easeInOut', bounce: 0.5, bounceStiffness: 300 }}
                                    >
                                    </motion.div>
                                </motion.div>

                                <motion.div className='overflow-hidden max-sm:z-30'>
                                    <Experience
                                        img={experience.img}
                                        from={experience.from}
                                        to={experience.to}
                                        techstack={experience.techstack}
                                    />
                                </motion.div>
                            </motion.div>
                        )
                    })}

                </motion.div>
            </div>
        </div>
    )
}

export default ExperiencePage