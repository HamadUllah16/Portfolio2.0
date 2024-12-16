import React from 'react'
import { Separator } from '../../components/ui/separator'


function Header() {
    return (
        <div>
            {/* background cover */}
            <div className="flex items-center justify-center relative h-52 inset-0 bg-gradient-to-r from-violet-400 to-purple-300 transition-opacity duration-300 ease-in-out">
                <h5 className='text-lg'>
                    i edit buttons.
                </h5>
            </div>
            {/* <div
                className='
            flex relative py-4
            items-center gap-8
            lg:px-40
            md:px-14
            md:flex
            md:items-center
            min-md:justify-center
            max-md:flex-col
            sm:px-5
            '
            >
                {children}
            </div> */}

            <Separator className='hidden max-sm:block' />

        </div >
    )
}

export default Header