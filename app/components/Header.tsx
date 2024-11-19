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
            <div className='bg-red-400 h-52'>
            </div>

            {/* profile picture, personal info and stats comp */}
            <div className='px-14 flex gap-8 relative py-4'>
                <div style={{ borderRadius: '70px', }} className=' w-60 h-60 z-10 absolute bottom-0 overflow-hidden '>
                    <Image
                        src={pfp}
                        alt='a profile picture'
                        fill
                        style={{ objectFit: 'cover', padding: '8px', borderRadius: '70px', zIndex: 1000 }}
                    />
                    <div
                        className='w-full h-full inset-0 rounded-full blur-lg bg-gradient-to-r bg-white opacity-75'
                    ></div>
                </div>

                <div className='w-60 h-36 bg-transparent'>
                </div>

                <div className='flex flex-col justify-end gap-3'>
                    <h3 className='text-2xl font-bold'>
                        Hamad Ullah
                    </h3>
                    <h6 className='max-w-80 text-sm'>
                        Software Engineer specialized in Front-End Development and Decentralized Applications.
                    </h6>
                    <div className='flex gap-2'>
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

                <div className='flex flex-grow flex-col items-end gap-3'>
                    <h3 className='text-2xl font-bold'>
                        Accomplishments
                    </h3>
                    <div className='flex flex-col w-fit gap-1'>
                        <Link href={'https://trustvote-client.vercel.app/'}
                            target='_blank'
                            referrerPolicy='no-referrer'
                        >
                            <Button
                                variant={'outline'}
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
    )
}

export default Header