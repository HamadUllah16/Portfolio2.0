import React from 'react'
import Experience from '../components/Experience'
const upwork = '/upwork.png'
const dextro = '/dextro.png'

function ExperiencePage() {

    return (
        <div className='px-14'>
            <div className='flex'>
                <div className='bg-red-400 z-0  w-1' />

                <div className='flex flex-col gap-14 '>


                    <Experience
                        img={dextro}
                        from='May 2024'
                        to='Sep 2024'
                        techstack={['NextJS', 'MUI', 'Redux', 'Axios', 'Figma']}
                    />

                    <Experience
                        img={upwork}
                        from='May 2022'
                        to='Now'
                        techstack={['HTML', 'CSS', 'SQL', 'WordPress']}
                    />

                </div>
            </div>
        </div>
    )
}

export default ExperiencePage