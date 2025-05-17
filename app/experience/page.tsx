'use client'
import React from 'react'
import { motion } from 'motion/react'
import WorkExperienceV2 from '@/components/WorkExperienceV2'
import { Separator } from '../../components/ui/separator'
import experienceData from "../../lib/data/experience.json"

const experiences = experienceData.experiences;

function ExperiencePage() {

    return (
        <div className='flex flex-col gap-3 overflow-auto'>
            <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-3xl font-bold'>
                Work Experience
            </motion.h3>
            <div className='flex relative flex-1 m-5 sm:py-1 max-sm:py-3 h-full overflow-auto'>
                <motion.div
                    className='flex flex-col w-full overflow-auto'
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