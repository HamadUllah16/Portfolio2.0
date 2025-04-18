import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Award, BookOpenCheck, Building2, GraduationCap, MapPin } from 'lucide-react'
import SocialButtons from './SocialButtons'
import { CompanyHoverCard } from './CompanyHoverCard'
import profileData from '../../lib/data/my-details.json'

const pfp = '/pfp.jpg'


function MyDetails() {
    return (
        <div className="flex flex-col gap-5 rounded-lg w-full
        lg:w-full lg:flex-col xl:w-full lg:p-0
        md:items-center md:flex-row md:w-full
        max-sm:items-start max-sm:px-3 max-sm:py-3 max-sm:h-full max-sm:flex-row max-sm:gap-5 max-sm:border max-sm:bg-border
        sm:items-start sm:justify-start sm:p-0 sm:flex-row
        ">
            <div style={{ borderRadius: '70px', }}
                className='
            relative
            lg:w-full lg:min-h-60
            md:size-40 md:min-w-40
            sm:size-44
            max-sm:size-32 max-sm:min-w-32 max-sm:min-h-full
            '
            >
                <Image
                    src={pfp}
                    alt='a profile picture'
                    fill
                    style={{ objectFit: 'cover', borderRadius: '1.3rem' }}
                />
            </div>



            <div
                className='
            flex flex-col justify-center gap-3 w-full
            md:w-full
            sm:w-fit sm:col-span-2 sm:items-start
            max-sm:w-full max-sm:items-start max-sm:gap-1
            '
            >
                <div className='flex flex-col gap-0 w-full sm:text-start md:text-start lg:items-center'>
                    <h3 className='text-3xl lg:text-primary font-bold max-sm:text-2xl'>
                        {profileData.name}
                    </h3>

                    <h4 className='text-lg text-wrap lg:text-primary max-sm:text-base'>
                        {profileData.role.title}
                    </h4>
                </div>
                <p className='text-sm max-sm:text-xs text-justify '>{profileData.headline}</p>

                <div className='md:hidden sm:hidden max-sm:visible'>
                    <SocialButtons />
                </div>

                <div className='space-y-1 sm:visible max-sm:hidden'>
                    <div className='flex gap-3 items-center  text-muted-foreground'>
                        <div className='w-3'>
                            <Building2 size={14} />
                        </div>
                        <CompanyHoverCard
                            size='sm'
                            label={profileData.role.title}
                            companyName={`@${profileData.role.company.name}`}
                            companyLogo={profileData.role.company.logo}
                            companyDescription={profileData.role.company.description}
                            companyJoinDate={profileData.role.company.joinDate}
                            companyLink={profileData.role.company.website}
                        />
                    </div>
                    <div className='flex gap-3 items-center  text-muted-foreground sm:visible max-sm:hidden'>
                        <div className='w-3'>
                            <GraduationCap size={14} />
                        </div>
                        <h6 className='md:max-w-80 max-sm:w-full text-xs text-wrap lg:text-primary'>
                            {profileData.degree}
                        </h6>
                    </div>
                    <div className='flex gap-3 items-center  text-muted-foreground sm:visible max-sm:hidden'>
                        <MapPin size={14} />
                        <h6 className='md:max-w-80 max-sm:w-full text-xs text-wrap lg:text-primary'>
                            {profileData.location}
                        </h6>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col gap-3 sm:hidden max-sm:hidden lg:flex lg:w-full
                md:hidden
                `}>
                <h3 className='text-lg text-wrap lg:text-primary md:text-start max-sm:text-center sm:text-center '>
                    Accomplishments
                </h3>
                <div className='flex gap-2 flex-col md:items-start max-sm:items-center sm:items-center'>
                    <div className='flex gap-3 items-center'>
                        <BookOpenCheck className='w-3 text-muted-foreground' />
                        <Link
                            href={'https://trustvote-client.vercel.app/'}
                            className='md:max-w-80 max-sm:w-full underline text-xs text-wrap'
                        >
                            Decentralized Electronic Voting System
                        </Link>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Award className='w-3 text-muted-foreground' />
                        <Link
                            href={'https://www.credly.com/badges/b619179c-b71c-4909-a414-f29ac0f34bc7/public_url'}
                            className='md:max-w-80 max-sm:w-full underline text-xs text-wrap'
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