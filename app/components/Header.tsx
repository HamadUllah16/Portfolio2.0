import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/ui/button'
const pfp = '/pfp.jpg'


function Header() {

    return (
        <div >
            {/* background cover */}
            {/* <div className='bg-gradient-to-b from-red-400 via-rose-400 to-fuchsia-400 h-52'>
            </div> */}

            <div className='bg-slate-600 h-52'>
            </div>
            {/* profile picture, personal info and stats comp */}
            <div
                className='
            flex relative py-4
            items-center gap-8
            md:px-14
            md:flex
            md:items-center
            min-md:justify-center
            max-md:flex-col
            sm:px-5
            '
            >
                <div style={{ borderRadius: '70px', }} className='w-60 h-60 z-10 lg:absolute lg:-top-10 md:relative md:top-2 md:flex sm:absolute sm:-top-10 max-sm:absolute max-sm:-top-10 overflow-hidden shadow-md max-sm:items-center '>
                    <Image
                        src={pfp}
                        alt='a profile picture'
                        fill
                        style={{ objectFit: 'cover', padding: '8px', borderRadius: '70px', zIndex: 1000 }}
                    />
                </div>
                <div
                    className='w-60 h-40 inset-0 rounded-full lg:block md:hidden  blur-lg bg-gradient-to-r bg-white opacity-75'
                ></div>

                <div className='flex flex-1 gap-8 lg:flex-row  md:flex-col max-sm:flex-col items-start'>

                    <div className='flex flex-col justify-center gap-3 w-full'>
                        <h3 className='text-2xl font-bold max-sm:text-center'>
                            Hamad Ullah
                        </h3>
                        <h6 className='max-w-80 text-sm'>
                            Software Engineer specialized in Front-End Development and Decentralized Applications.
                        </h6>
                        <div className='flex gap-2 max-sm:justify-center'>
                            <a href={'https://drive.google.com/drive/folders/1qfen1IlVD3V-dI6xLf25zWJ8G16kPIeh?usp=sharing'} target='_blank'>
                                <Button>
                                    Resume
                                </Button>
                            </a>
                            <a href='https://github.com/HamadUllah16' target='_blank'>
                                <Button variant={'outline'}>
                                    <Github />
                                </Button>
                            </a>

                            <a href='https://www.linkedin.com/in/hamadullah16/' target='_blank'>
                                <Button variant={'outline'}>
                                    <Linkedin />
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-grow flex-col lg:items-end justify-center sm:items-start gap-3'>
                        <h3 className='text-2xl font-bold max-sm:text-center'>
                            Accomplishments
                        </h3>
                        <div className='flex flex-col w-fit gap-1 max-sm:items-center'>
                            <Link href={'https://trustvote-client.vercel.app/'}
                                target='_blank'
                                referrerPolicy='no-referrer'
                            >
                                <Button
                                    variant={'outline'}
                                    className='sm:h-9 py-2 max-sm:h-8 rounded-md px-3 text-xs'
                                >
                                    FYP: Decentralized Electronic Voting System
                                </Button>
                            </Link>
                            <Link
                                href={'https://www.credly.com/badges/b619179c-b71c-4909-a414-f29ac0f34bc7/public_url'}
                                target='_blank'
                                referrerPolicy='no-referrer'
                            >
                                <Button
                                    variant={'outline'}
                                    className='sm:h-9 py-2 max-sm:h-8 rounded-md px-3 text-xs'
                                >
                                    Meta Front-End Specialization
                                </Button>
                            </Link>
                        </div>
                        {/* <p className='text-sm'>
                        Press <span className='px-2 py-1 text-white bg-slate-600 rounded-lg'>C</span> to copy email
                        </p> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header