'use client'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../../components/ui/badge'

function Experience({ img, from, to, techstack }: { img: string, from: string, to: string, techstack: string[] }) {
    return (
        <div className='rounded-lg sm:rounded-2xl max-sm:rounded-2xl flex flex-col items-center z-20 bg-secondary justify-between border border-input p-3'>
            <div className='flex gap-3'>
                <div className='w-24 h-12 relative flex justify-start'>
                    <Image
                        src={img}
                        alt='company logo'
                        fill
                        style={{ objectFit: 'contain', left: 0, borderRadius: 5 }}
                    />
                </div>
                <div className='flex flex-grow border-l' />
                <div className='flex flex-col gap-2 items-start justify-center'>

                    <div className='flex gap-2'>
                        <p className='text-sm font-sans'>
                            {from}
                        </p>
                        <p className='text-sm'>
                            -
                        </p>
                        <p className='text-sm font-sans'>
                            {to}
                        </p>
                    </div>

                    <div className='flex justify-start w-full gap-1 flex-wrap'>
                        {techstack.map((tech, index) => {
                            return (
                                // className='px-2 py-1 text-xs bg-input rounded-lg'
                                <Badge key={index} variant={'default'}>
                                    {tech}
                                </Badge>

                            )
                        })}
                    </div>


                </div>
            </div>



        </div>
    )
}

export default Experience