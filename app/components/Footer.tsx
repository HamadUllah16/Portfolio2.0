import React from 'react'

function Footer() {
    return (
        <div className='w-svw relative min-h-12'>
            <div
                className='w-full absolute bottom-0 bg-input p-5 mt-auto px-14'
            >
                <p className='text-center font-semibold text-red-400'>
                    Made with NextJS, ShadCN, & PostgreSQL

                </p>
            </div>
        </div>
    )
}

export default Footer