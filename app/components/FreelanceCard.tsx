import Image from 'next/image'
import React from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
const upwork = '/upwork.png'

function FreelanceCard() {
    return (
        <div className='flex flex-col gap-2 border border-input rounded-lg p-3'>
            <div className='flex w-full relative justify-center bg-secondary p-4 rounded-md border-input'>
                <Image
                    src={upwork}
                    width={112}
                    height={56}
                    // fill
                    alt=''
                    style={{ objectFit: 'contain' }}
                />
            </div>

            <div className='flex flex-col gap-3'>

                <div className='flex justify-between gap-10'>

                    <div className='flex flex-col'>
                        <p className='text-sm text-slate-600'>
                            Projects
                        </p>
                        <p className='text-xl'>
                            13
                        </p>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-sm text-slate-600'>
                            Job Success Score
                        </p>
                        <p className='text-xl'>
                            100%
                        </p>
                    </div>


                </div>

                <div className='flex w-full'>
                    <Link
                        className='w-full'
                        href={'https://www.upwork.com/freelancers/~019b0b1b1406a889c6'}
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