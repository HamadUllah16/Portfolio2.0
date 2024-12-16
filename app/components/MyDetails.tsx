import { BookOpenCheck, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/ui/button'
import FacebookMetaIcon from '@/custom-icons/FacebookMetaIcon'
import { Separator } from '../../components/ui/separator'
const pfp = '/pfp.jpg'


function MyDetails() {
    const layout = 'row'
    return (
        <>
            <div style={{ borderRadius: '70px', }}
                className='
                    w-60 h-60 z-10
                lg:absolute lg:-top-10
                md:relative md:top-2 md:flex
                sm:absolute sm:-top-10 max-sm:absolute
                max-sm:-top-40
                overflow-hidden
                shadow-md
                max-sm:items-center'
            >
                <Image
                    src={pfp}
                    alt='a profile picture'
                    fill
                    style={{ objectFit: 'cover', padding: '8px', borderRadius: '70px', zIndex: 1000 }}
                />
            </div>
            <div
                className='w-60 h-48 max-sm:h-12 inset-0 rounded-full lg:block md:hidden  blur-lg bg-gradient-to-r bg-white opacity-75'
            ></div>

            <div className={`flex flex-1 gap-8 ${layout === 'row' ? "lg:flex-col" : "lg:flex-row"}`}>

                <div className='flex flex-col justify-center max-sm:items-center gap-3 w-full'>
                    <h3 className='text-2xl font-bold max-sm:text-center'>
                        Hamad Ullah
                    </h3>
                    <h6 className='md:max-w-80 max-sm:w-full max-sm:text-center text-sm'>
                        Software Engineer specialized in Front-End Development.
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

                <div className={`flex flex-col gap-3`}>
                    <h3 className='text-2xl font-bold'>
                        Accomplishments
                    </h3>
                    <div className='flex flex-col gap-0'>
                        <Link href={'https://trustvote-client.vercel.app/'}
                            target='_blank'
                            referrerPolicy='no-referrer'
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
        </>

    )
}

export default MyDetails