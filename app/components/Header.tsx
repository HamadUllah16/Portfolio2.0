import React from 'react'
import { Separator } from '../../components/ui/separator'


function Header({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* background cover */}
            <div className="relative h-52 w-full">
                <div className="flex items-center justify-center absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-300 transition-opacity duration-300 ease-in-out">
                    <h5 className='text-lg'>
                        i edit buttons.
                    </h5>
                </div>
                {/* <Badge className='absolute z-50 right-3 top-3' variant={'secondary'}>Version: 2.0</Badge> */}
            </div>

            {/* <div className='bg-slate-600 h-52 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-violet-400 to-purple-300'>
            </div> */}
            {/* profile picture, personal info and stats comp */}
            <div
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
            </div>

            <Separator className='hidden max-sm:block' />

        </div >
    )
}

export default Header