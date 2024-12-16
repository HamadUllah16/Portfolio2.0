import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/ui/button'
import FacebookMetaIcon from '@/custom-icons/FacebookMetaIcon'
import { BookOpenCheck } from 'lucide-react'
const pfp = '/pfp.jpg'


function MyDetails() {
    const layout = 'row'
    return (
        <div className="flex flex-col gap-3 max-sm:items-center sm:items-center">
            <div style={{ borderRadius: '70px', }}
                className='
                    w-60 h-60 relative
                    '
            >
                <Image
                    src={pfp}
                    alt='a profile picture'
                    fill
                    style={{ objectFit: 'cover', borderRadius: '70px' }}
                />
            </div>



            <div className='flex flex-col justify-center max-sm:items-center gap-3 w-full'>
                <h3 className='text-2xl font-bold max-sm:text-center sm:text-center'>
                    Hamad Ullah
                </h3>
                <h6 className='md:max-w-80 max-sm:w-full max-sm:text-center text-sm'>
                    Software Engineer specialized in Front-End Development.
                </h6>
            </div>

            <div className={`flex flex-col gap-3`}>
                <h3 className='text-2xl font-bold max-sm:text-center sm:text-center'>
                    Accomplishments
                </h3>
                <div className='flex flex-col gap-0 max-sm:items-center sm:items-center'>
                    <Link href={'https://trustvote-client.vercel.app/'}
                        target='_blank'
                        referrerPolicy='no-referrer'
                        className=' w-fit'
                    >
                        <Button
                            variant={'link'}
                            className='rounded-xl text-xs px-0 py-0'
                        >
                            <BookOpenCheck />
                            Decentralized Electronic Voting System
                        </Button>
                    </Link>
                    <Link
                        href={'https://www.credly.com/badges/b619179c-b71c-4909-a414-f29ac0f34bc7/public_url'}
                        target='_blank'
                        referrerPolicy='no-referrer'
                        className='w-fit'
                    >
                        <Button
                            variant={'link'}
                            className='rounded-xl text-xs px-0 py-0'
                        >
                            <FacebookMetaIcon />
                            Meta Front-End Specialization
                        </Button>
                    </Link>
                </div>
                {/* <p className='text-sm'>
                        Press <span className='px-2 py-1 text-white bg-slate-600 rounded-lg'>C</span> to copy email
                        </p> */}
            </div>
        </div>

    )
}

export default MyDetails