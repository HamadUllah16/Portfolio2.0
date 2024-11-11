import React from 'react'
import NavItems from './NavItems'

function Navbar() {
    return (
        <div className='px-14'>
            <div className='relative overflow-clip'>
                <NavItems
                    navItems={[
                        { link: '/', title: 'Work' },
                        { link: '/experience', title: 'Experience' },
                        { link: '/about', title: 'About' },
                        { link: '/freelance', title: 'Freelance' }
                    ]}
                />
                <div className='border-b-2 border-b-slate-200 z-10 w-full absolute bottom-0'></div>
            </div>
        </div>
    )
}


export default Navbar