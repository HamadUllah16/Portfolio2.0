'use client'
import React from 'react'
import { motion } from 'motion/react'
import WorkExperienceV2 from '@/components/WorkExperienceV2'
import { Separator } from '../../components/ui/separator'


const upwork = '/upwork.png'
const dextro = '/dextro.png'
const grayhat = '/grayhat.png'

function ExperiencePage() {

    const experiences = [
        { role: 'Associate Software Engineer', company: 'Grayhat Developers', img: grayhat, from: 'March 2025', to: 'Current', techstack: ["NextJS", "ShadCN", "ZuStand"], type: "Full-time", href: "https://www.grayhat.com.pk/" },

        { role: 'Web Developer', company: 'Grayhat Developers', img: grayhat, from: 'Jan 2025', to: 'March 2025', techstack: ["NextJS", "ShadCN", "ZuStand"], type: "Part-time", href: "https://www.grayhat.com.pk/" },

        { role: 'Front-End Engineer', company: 'Dextro', img: dextro, from: 'May 2024', to: 'Oct 2024', techstack: ["NextJS", "MUI", "Redux", "Axios", "Figma"], type: "Part-time", href: "https://dextro.dev/" },

        { role: 'Software Engineer', company: 'Upwork', img: upwork, from: "Sep 2021", to: "May-2024", techstack: ["HTML", "CSS", "SQL", "WordPress"], type: "Part-time", href: "#" }
    ]

    return (
        <div className='flex flex-col gap-3 h-full'>
            <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-3xl font-bold'>
                Work Experience
            </motion.h3>
            <div className='flex relative h-full m-5 sm:py-1 max-sm:py-3'>
                <motion.div
                    className='flex flex-col w-full'
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        show: { opacity: 1, x: 0, transition: { staggerChildren: 0.7, type: 'keyframes' } },
                    }}
                    initial='hidden'
                    animate='show'
                >
                    {experiences.map((experience, index) => (
                        <WorkExperienceV2
                            key={index}
                            experience={experience}
                        />
                    ))}
                    <Separator />

                </motion.div>

            </div>
        </div>
    )
}

export default ExperiencePage