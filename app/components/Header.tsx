import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
const pfp = '/pfp.jpg'

function Header() {
    return (
        <div >
            {/* background cover */}
            <div className='bg-red-400 h-52'>
            </div>

            {/* profile picture, personal info and stats comp */}
            <div className='px-14 flex gap-8 relative py-4'>
                <div className=' w-60 h-60 rounded-3xl z-10 bg-slate-500 absolute bottom-0 overflow-hidden shadow-lg'>
                    <Image
                        src={pfp}
                        alt='a profile picture'
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className='w-60 h-36 bg-transparent'>
                </div>

                <div className='flex flex-col justify-end gap-3'>
                    <h3 className='text-2xl font-bold'>
                        Hamad Ullah
                    </h3>
                    <h6 className='max-w-80 text-sm'>
                        Software Engineer specialized in Front-End Development and Decentralized Applications
                    </h6>
                    <div className='flex gap-2'>
                        <Button>
                            Resume
                        </Button>
                        <Button variant={'outline'}>
                            GitHub
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header