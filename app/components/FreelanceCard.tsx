import Image from 'next/image'
import React from 'react'
import { Button } from '../../components/ui/button'
const upwork = '/upwork.png'

function FreelanceCard() {
    return (
        <div className='flex flex-col gap-2 border border-input rounded-lg'>
            <div className='flex justify-between bg-secondary p-4 border-b border-input'>
                <Image
                    src={upwork}
                    width={150}
                    height={70}
                    alt=''
                />
            </div>

            <div className='flex flex-col gap-3 p-2'>

                <div className='flex flex-col'>
                    <p className='text-sm text-slate-600'>
                        Projects
                    </p>
                    <p className='text-xl'>
                        13
                    </p>
                </div>
                <div className='flex w-full'>
                    <Button
                        className='w-full'
                        variant={'default'}
                    >
                        Hire
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FreelanceCard