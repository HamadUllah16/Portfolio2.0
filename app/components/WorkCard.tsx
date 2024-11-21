'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { LinkIcon } from 'lucide-react';
import Image from 'next/image';

function WorkCard({ work }: { work: { id: string, image: string, github: string, preview: string, title: string, description: string, technologies: string[], status: string } }) {
    const [show, setShow] = useState(false);
    return (
        <div
            key={work.id}
            className="mb-4 border bg-secondary rounded-lg h-fit"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >

            {/* Texts */}
            <div className="flex flex-wrap gap-4 p-2 w-full h-full">

                {/* Random Background Color */}
                <div
                    className={`max-sm:hidden flex h-52 w-52 rounded-md items-center justify-center relative overflow-hidden bg-red-400`} // Tailwind class
                >
                    {work.image &&
                        <Image
                            src={work.image}
                            alt='a logo for the project'
                            height={150}
                            width={150}
                            style={{ objectFit: 'contain' }}
                        />
                    }
                    <div
                        className={`${show ? 'opacity-100 z-50 bg-opacity-90' : 'opacity-0 bg-opacity-0 z-0'} bg-red-400 flex gap-2 items-center justify-center h-full w-full absolute transition-all duration-300 ease-in-out`}
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

                {/* Text and Badge Section */}
                <div className='flex flex-col gap-2 h-52 w-52 justify-center relative'>
                    <LinkIcon className='absolute right-0 top-0' size={'12px'} />

                    <div className='flex gap-1 justify-between items-center'>
                        <h3 className="font-bold text-lg">{work.title}</h3>
                        <Badge variant={work.status === 'Completed' ? 'success' : 'progress'} className='h-fit'>{work.status}</Badge>
                    </div>
                    <p className='text-sm'>{work.description}</p>
                    <div className="flex flex-wrap gap-1 border-t-2 pt-2 overflow-y-auto overflow-x-hidden">
                        {work.technologies.map((tech, index: number) => (
                            <Badge key={index} variant={'default'} >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
