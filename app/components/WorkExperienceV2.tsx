import { ArrowRightToLine, ExternalLink, Link2, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ExperienceType {
    role: string,
    company: string,
    img: string,
    from: string,
    to: string,
    techstack: string[],
    type: string
    href: string
}

function WorkExperienceV2({ experience }: { experience: ExperienceType }) {

    return (
        <div className='flex flex-col group w-fit'>

            <div className='flex gap-5 w-fit'>

                {/* graphics */}
                <div className='flex flex-col items-center gap-2'>
                    {/* top line */}
                    <div className='flex h-full w-[2px] bg-input max-sm:bg-primary/20' style={{ opacity: experience.to === 'Current' ? 0 : 1 }} />

                    {/* dot */}
                    <div className='flex flex-col gap-1'>
                        <div className='h-2 w-2 rounded-full bg-gray-500 group-hover:bg-green-800 group-hover:scale-150 transition-all ease-in-out duration-300' />
                    </div>

                    {/* bottom line */}
                    <div className='flex h-full w-[2px] bg-input max-sm:bg-primary/20' />
                </div>

                {/* actual card */}
                <div className='flex gap-2 flex-grow overflow-hidden p-2'>
                    {/* card image */}
                    <Link href={experience.href}>
                        <div className='flex flex-col items-center justify-center h-full w-full max-w-28 bg-input max-sm:bg-primary-foreground rounded-md relative shadow-sm group-hover:shadow-md transition-all ease-in-out duration-300 '>
                            <Image
                                // fill
                                width={200}
                                height={200}
                                src={experience.img}
                                alt='a company logo'
                                className='object-contain p-2 max-h-14 group-hover:scale-90 group-hover:-translate-y-2 transition-all ease-in-out duration-300'
                            />
                            <ExternalLink size={14} className='absolute bottom-0 text-primary/60 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all ease-in-out duration-300' />
                        </div>
                    </Link>

                    {/* card texts */}
                    <div className='flex flex-col gap-1'>
                        <div>
                            <h6 className='text-lg font-bold'>{experience.role}</h6>
                            <p className='text-xs border w-fit rounded-full px-2 bg-green-200 text-green-950'>{experience.type}</p>
                        </div>
                        <div>
                            <p className='font-sans'>{experience.company}</p>
                            <p className='font-sans text-muted-foreground text-sm'>{experience.from} - {experience.to}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WorkExperienceV2