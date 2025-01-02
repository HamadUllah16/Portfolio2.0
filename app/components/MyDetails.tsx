import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Award, BookOpenCheck, Building2, GraduationCap, MapPin } from 'lucide-react'
import SocialButtons from './SocialButtons'
const pfp = '/pfp.jpg'


function MyDetails() {
    return (
        <div className="flex flex-col gap-5
        lg:w-fit lg:flex-col xl:w-fit lg:p-0
        md:items-start
        max-sm:items-center max-sm:p-2 max-sm:h-full max-sm:flex-row max-sm:gap-2
        sm:items-center sm:justify-start sm:p-5 sm:flex-row
        ">
            <div style={{ borderRadius: '70px', }}
                className='
                relative
                lg:size-60
                    md:size-40 md:min-w-40
                    sm:size-40
                    max-sm:size-32 max-sm:min-w-32
                    '
            >
                <Image
                    src={pfp}
                    alt='a profile picture'
                    fill
                    style={{ objectFit: 'cover', borderRadius: '2rem' }}
                />
            </div>



            <div className='
            flex flex-col justify-center gap-2 w-full
            md:w-full
            sm:w-fit sm:col-span-2 sm:items-start
            max-sm:w-full max-sm:items-start
            '>

                <h3 className='text-2xl lg:text-primary sm:text-white max-sm:text-white font-bold max-sm:text-center sm:text-center'>
                    Hamad Ullah
                </h3>
                <div className='flex gap-2 items-start'>
                    {/* <Circle size={25} /> */}
                    <h6 className='md:max-w-80 max-sm:w-full text-sm text-wrap lg:text-primary sm:text-white max-sm:text-white'>
                        Software Engineer specialized in Front-End Development.
                    </h6>
                </div>
                <div className='flex gap-2 items-center'>
                    <Building2 size={14} />
                    <p className='md:max-w-80 max-sm:w-full text-xs text-wrap lg:text-primary sm:text-white max-sm:text-white'>
                        Web Developer Intern {""}@
                        <Link
                            className='underline'
                            href={'https://www.grayhat.com.pk/'}

                        >
                            Grayhat
                        </Link>
                    </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='w-3'>
                        <GraduationCap size={14} />
                    </div>
                    <h6 className='md:max-w-80 max-sm:w-full text-xs text-wrap lg:text-primary sm:text-white max-sm:text-white'>
                        Abasyn University
                    </h6>
                </div>
                <div className='flex gap-2 items-center'>
                    <MapPin size={14} />
                    <h6 className='md:max-w-80 max-sm:w-full text-xs text-wrap lg:text-primary sm:text-white max-sm:text-white'>
                        Peshawar
                    </h6>
                </div>


                <div className='lg:hidden xl:hidden md:block sm:block max-sm:block'>
                    <SocialButtons />
                </div>
            </div>

            <div className={`flex flex-col gap-2 sm:hidden max-sm:hidden lg:flex lg:w-fit
                md:hidden
                `}>
                <h3 className='text-2xl font-bold md:text-start max-sm:text-center sm:text-center '>
                    Accomplishments
                </h3>
                <div className='flex gap-2 flex-col md:items-start max-sm:items-center sm:items-center'>
                    <div className='flex gap-2 items-center'>
                        <BookOpenCheck size={14} />
                        <Link
                            href={'https://trustvote-client.vercel.app/'}
                            className='md:max-w-80 max-sm:w-full underline text-xs text-wrap lg:text-primary sm:text-white max-sm:text-white'
                        >
                            Decentralized Electronic Voting System
                        </Link>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='w-3'>
                            <Award size={14} />
                        </div>
                        <Link
                            href={'https://www.credly.com/badges/b619179c-b71c-4909-a414-f29ac0f34bc7/public_url'}
                            className='md:max-w-80 max-sm:w-full underline text-xs text-wrap lg:text-primary sm:text-white max-sm:text-white'
                        >
                            Meta Front-End Specialization
                        </Link>
                    </div>
                </div>
                {/* <p className='text-sm'>
                        Press <span className='px-2 py-1 text-white bg-slate-600 rounded-lg'>C</span> to copy email
                        </p> */}
            </div>
        </div>

    )
}

export default MyDetails