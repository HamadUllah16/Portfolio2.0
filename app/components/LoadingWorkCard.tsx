'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Skeleton } from '../../components/ui/skeleton';

function LoadingWorkCard() {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
            }}
            className="border bg-secondary rounded-lg sm:rounded-2xl max-sm:rounded-2xl h-fit w-full"
        >

            <div className="flex gap-4 relative p-2 w-full h-full max-sm:flex-col">

                <Skeleton
                    className='flex h-40 w-72 max-sm:w-full rounded-lg items-center justify-center relative overflow-hidden'
                />

                {/* Text and Badge Section */}
                <div className='flex flex-wrap flex-col gap-2 w-full justify-center relative'>
                    {/* <Skeleton className='w-3 h-3' /> */}

                    <div className='flex flex-wrap gap-1 justify-between items-center'>
                        <Skeleton className='text-lg w-40 h-7' />
                        <Skeleton className='w-full h-5' />
                    </div>
                    <Skeleton className='text-sm' />
                    <div className="flex flex-wrap gap-1 border-t-2 pt-2 overflow-y-auto overflow-x-hidden">
                        {[1, 2, 3].map((tech) => (
                            <Skeleton key={tech} className='h-6 w-16' />
                        ))}
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default LoadingWorkCard

