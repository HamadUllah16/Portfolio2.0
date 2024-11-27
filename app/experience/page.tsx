import React from 'react'
import Experience from '../components/Experience'
const upwork = '/upwork.png'
const dextro = '/dextro.png'

function ExperiencePage() {

    return (
        <div className='md:px-14 sm:px-5 max-sm:px-5'>
            <div className='flex relative'>
                <div className='bg-gradient-to-r from-violet-400 to-purple-300 z-0  w-1 sm:-left-1 absolute  max-sm:absolute h-full left-10 ' />

                <div className='flex flex-col gap-14 '>


                    <Experience
                        img={dextro}
                        from='May 2024'
                        to='Sep 2024'
                        techstack={['NextJS', 'MUI', 'Redux', 'Axios', 'Figma']}
                    />

                    <Experience
                        img={upwork}
                        from='Sep 2021'
                        to='Now'
                        techstack={['HTML', 'CSS', 'SQL', 'WordPress']}
                    />

                </div>
            </div>
        </div>
    )
}

export default ExperiencePage