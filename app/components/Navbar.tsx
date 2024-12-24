'use client'
import React from 'react'
import NavItems from './NavItems'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

function Navbar() {
    const { allWork } = useSelector((state: RootState) => state.work);


    return (
        <div className='flex flex-col gap-3 overflow-clip md:flex sm:hidden max-sm:hidden justify-center border w-fit p-2 rounded-lg'>
            <NavItems
                navItems={[
                    { link: '/', title: 'Work', count: allWork.length },
                    { link: '/experience', title: 'Experience', count: null },
                    { link: '/about', title: 'About', count: null },
                    { link: '/freelance', title: 'Freelance', count: null }
                ]}
            />

            {/* <div className='border-b-2 border-b-slate-200 z-10 w-full'></div> */}
        </div>
    )
}


export default Navbar