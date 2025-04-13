import Image from 'next/image'
import React from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

import freelanceData from "../../lib/data/freelance.json";

function FreelanceCard() {
    return (
        <div className='flex flex-col gap-2 border border-input rounded-lg p-3 sm:rounded-2xl max-sm:rounded-2xl'>
            <div className='flex w-full justify-center bg-secondary p-4 rounded-md border-input relative'>
                <Image
                    src={freelanceData.image}
                    width={112}
                    height={56}
                    alt=''
                    style={{ objectFit: 'contain' }}
                />
                <div className='absolute top-2 right-2 w-6 h-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 28 28" role="img"><path fill="#1F57C3" d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.761 7.542l1.188 3.201 3.285.184a.78.78 0 01.448.173c.13.104.226.247.277.41a.9.9 0 01.01.504.858.858 0 01-.261.422L17.15 14.6l.854 3.328a.907.907 0 01-.025.507.857.857 0 01-.291.404.785.785 0 01-.919.02L14 16.984l-2.764 1.862a.784.784 0 01-.916-.012.855.855 0 01-.294-.4.906.906 0 01-.031-.505l.847-3.314-2.55-2.18a.858.858 0 01-.26-.421.9.9 0 01.01-.504.853.853 0 01.276-.41.782.782 0 01.448-.173l3.285-.184 1.188-3.201a.86.86 0 01.302-.394.79.79 0 01.918 0 .86.86 0 01.302.394z" clipRule="evenodd"></path></svg>
                </div>
            </div>

            <div className='flex flex-col gap-3'>

                <div className='flex justify-between gap-10'>
                    {freelanceData.properties.map((property, index) => {
                        return (
                            <div className='flex flex-col' key={index}>
                                <p className='text-sm text-slate-600 capitalize'>
                                    {property.name}
                                </p>
                                <p className='text-xl'>
                                    {property.value}
                                </p>
                            </div>
                        )
                    })}


                </div>

                <div className='flex w-full'>
                    <Link
                        className='w-full'
                        href={freelanceData.href}
                        target='_blank'
                        referrerPolicy='no-referrer'
                    >
                        <Button
                            className='w-full rounded-md'
                            variant={'default'}
                        >
                            Get in touch
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FreelanceCard