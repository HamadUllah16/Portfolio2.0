'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

function WorkCard({ work }: { work: { id: string, image: string, github: string, preview: string, title: string, description: string, technologies: string[] } }) {
    const [show, setShow] = useState(false);
    return (
        <div key={work.id} className="mb-4 max-w-80">
            {/* <img src={work.imageUrl} alt={work.title} /> */}

            {/* Texts */}
            <div className="flex flex-col gap-2">
                <div
                    className='flex items-center justify-center relative w-80 h-auto rounded-3xl overflow-hidden '
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    <Image
                        src={work.image ?? ''}
                        alt='a screenshot of application'
                        width={320}
                        height={180}
                        style={{ objectFit: 'contain', borderRadius: '12px' }}
                    />
                    <div
                        className={`${show ? 'opacity-100 z-50 bg-opacity-10' : 'opacity-0 bg-opacity-0 z-0'} bg-white flex gap-2 items-center justify-center absolute w-full h-full transition-all duration-300 ease-in-out`}
                    >
                        <Link href={work?.github} target='_blank'>
                            <Button variant={'outline'}>
                                GitHub
                            </Button>
                        </Link>
                        <Link href={work?.preview} target='_blank'>
                            <Button>
                                Preview
                            </Button>
                        </Link>
                    </div>
                </div>
                <h3 className="font-bold text-lg">{work.title}</h3>
                <p>{work.description}</p>
                <div className="flex flex-wrap gap-1">
                    {work.technologies.map((tech, index: number) => (
                        <Button key={index} variant={'outline'} className='bg-slate-200 capitalize'>
                            {tech}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkCard