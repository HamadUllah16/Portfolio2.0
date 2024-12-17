import React from 'react'


function Header() {
    return (
        <div>
            {/* background cover */}
            <div className="flex items-center justify-center relative h-52 transition-opacity duration-300 ease-in-out">
                <h5 className='text-lg lg:block sm:hidden max-sm:hidden md:hidden text-white'>
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

        </div >
    )
}

export default Header