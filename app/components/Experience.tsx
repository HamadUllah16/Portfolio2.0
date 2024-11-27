import Image from 'next/image'
import React from 'react'
import { Badge } from '../../components/ui/badge'

function Experience({ img, from, to, techstack }: { img: string, from: string, to: string, techstack: string[] }) {
    return (
        <div className='flex px-10 max-sm:px-5 relative '>
            <div className='rounded-lg flex flex-col items-center z-20 gap-2 bg-secondary justify-between border border-input p-3'>
                <div className='flex gap-10'>
                    <div className='w-28 h-14 relative flex justify-start rounded-lg'>
                        <Image
                            src={img}
                            alt='company logo'
                            fill
                            style={{ objectFit: 'contain', left: 0, padding: 5, borderRadius: 5 }}
                        />
                    </div>
                    <div className='flex flex-col gap-1 items-end justify-center'>

                        <div className='flex gap-5'>
                            <p className='text-sm'>
                                {from}
                            </p>
                            <p className='text-sm'>
                                -
                            </p>
                            <p className='text-sm'>
                                {to}
                            </p>
                        </div>


                    </div>
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

            {/* circular div */}
            <div className='w-5 h-5 absolute -left-3 max-sm:hidden z-50 rounded-full bg-gradient-to-r from-violet-400 to-purple-300' />
        </div>
    )
}

export default Experience