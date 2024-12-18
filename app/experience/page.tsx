'use client'
import React from 'react'
import Experience from '../components/Experience'
const upwork = '/upwork.png'
const dextro = '/dextro.png'
import { motion } from 'motion/react'

function ExperiencePage() {

    return (
        <div className='py-5'>
            <div className='flex relative'>
                <div className='bg-gradient-to-r from-violet-400 to-purple-300 z-0  w-1 sm:left-2 absolute  max-sm:absolute h-full left-10 ' />


                <motion.div
                    className='flex flex-col gap-14 '
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.25
                            }
                        }
                    }}
                    initial='hidden'
                    animate='show'
                >


                    <Experience
                        img={dextro}
                        from='May 2024'
                        to='Sep 2024'
                        techstack={['NextJS', 'MUI', 'Redux', 'Axios', 'Figma']}
                    />

                    <Experience
                        img={upwork}
                        from='Sep 2021'
                        to='Now'
                        techstack={['HTML', 'CSS', 'SQL', 'WordPress']}
                    />

                </motion.div>
            </div>
        </div>
    )
}

export default ExperiencePage