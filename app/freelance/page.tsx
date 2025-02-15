'use client'
import FreelanceCard from '@/components/FreelanceCard'
import { motion } from 'motion/react'
import React from 'react'

function FreelancePage() {
    return (
        <div className='flex flex-col gap-5'>
            <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-2xl font-bold'>
                Freelance Profiles
            </motion.h3>
            <motion.div
                className='p-5 sm:py-1 max-sm:py-3 flex w-fit gap-4'
                variants={{
                    hidden: { opacity: 0, scale: 0.6, x: -40, rotate: -10 },
                    show: { opacity: 1, scale: 1, x: 0, rotate: 0, transition: { staggerChildren: 0.7, type: 'keyframes' } },
                }}
                initial='hidden'
                animate='show'
            >
                <FreelanceCard />
            </motion.div>
        </div>
    )
}

export default FreelancePage