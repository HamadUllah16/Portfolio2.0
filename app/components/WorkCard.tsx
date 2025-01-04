'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { LinkIcon } from 'lucide-react';
import { motion } from 'motion/react'
import Image from 'next/image';

function WorkCard({ work, bgColor }: { bgColor: string, work: { id: string, image: string, github: string, preview: string, title: string, description: string, technologies: string[], status: string } }) {
    const [show, setShow] = useState(false);
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
            }}
            key={work.id}
            className="border bg-secondary rounded-lg sm:rounded-2xl max-sm:rounded-2xl h-fit w-full"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >

            <div className="flex gap-4 relative p-2 w-full h-full max-sm:flex-col">

                {/* Background Color */}
                <div
                    className={`flex h-40 w-72 max-sm:w-full rounded-md items-center justify-center relative overflow-hidden bg-gradient-to-r from-violet-400 to-purple-300`}
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
                        className={`max-sm:hidden ${show ? 'opacity-100 bg-opacity-90' : 'opacity-0 bg-opacity-0'} ${bgColor ?? 'bg-red-400'} flex gap-2 items-center justify-center h-full w-full absolute z-10 transition-all duration-300 ease-in-out`}
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
                <div className='flex flex-wrap flex-col gap-2 w-full justify-center relative'>
                    <LinkIcon className='absolute right-0 top-0 max-sm:hidden' size={'12px'} />

                    <div className='flex flex-wrap gap-1 justify-between items-center'>
                        <h3 className="font-bold text-lg">{work.title}</h3>
                        <Badge variant={work.status === 'Completed' ? 'success' : 'progress'} className='h-fit'>{work.status}</Badge>
                    </div>
                    <p className='text-sm text-wrap'>{work.description}</p>
                    <div className="flex flex-wrap gap-1 border-t-2 pt-2 overflow-y-auto overflow-x-hidden">
                        {work.technologies.map((tech, index: number) => (
                            <Badge key={index} variant={'default'} >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                </div>
                <div
                    className={`${show ? 'max-sm:flex opacity-100 z-30 bg-opacity-90' : 'opacity-0 bg-opacity-0 z-0'} ${bgColor ?? 'bg-red-400'} flex rounded-md gap-2 items-center justify-center h-full w-full absolute left-0 top-0 transition-all duration-300 ease-in-out sm:hidden`}
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
        </motion.div>
    )
}

export default WorkCard
