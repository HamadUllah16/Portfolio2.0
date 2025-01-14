import Image from 'next/image'
import React from 'react'

interface ExperienceType {
    role: string,
    company: string,
    img: string,
    from: string,
    to: string,
    techstack: string[]
}

function WorkExperienceV2({ experience }: { experience: ExperienceType }) {

    return (
        <div className='flex flex-col max-w-96'>

            <div className='flex gap-5'>

                {/* graphics */}
                <div className='flex flex-col items-center gap-2'>
                    {/* top line */}
                    <div className='flex h-full w-[2px] bg-input' style={{ opacity: experience.to === 'Current' ? 0 : 1 }} />

                    {/* dot */}
                    <div className='flex flex-col gap-1'>
                        <div className='h-2 w-2 rounded-full bg-gray-500' />
                    </div>

                    {/* bottom line */}
                    <div className='flex h-full w-[2px] bg-input' />
                </div>

                {/* actual card */}
                <div className='flex gap-2 flex-grow overflow-hidden p-2'>
                    {/* card image */}
                    <div className='h-full w-full max-w-28 bg-input rounded-md relative'>
                        <Image
                            fill
                            src={experience.img}
                            alt='a company logo'
                            className='object-contain p-2'
                        />
                    </div>

                    {/* card texts */}
                    <div className='flex flex-col gap-2'>
                        <h6 className='text-lg font-bold'>{experience.role}</h6>
                        <div>
                            <p className='font-sans'>{experience.company}</p>
                            <p className='font-sans text-muted-foreground'>{experience.from} - {experience.to}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WorkExperienceV2