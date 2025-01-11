'use client'

import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BriefcaseBusiness, Home, Shell, SquareUserRound } from 'lucide-react'

function MobileNav() {
    const pathname = usePathname()
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

    const navItems = [
        { label: 'Work', path: '/', icon: <Home /> },
        { label: 'Experience', path: '/experience', icon: <BriefcaseBusiness /> },
        { label: 'About', path: '/about', icon: <SquareUserRound /> },
        { label: 'Freelance', path: '/freelance', icon: <Shell /> },
    ]

    useEffect(() => {
        const activeIndex = navItems.findIndex((item) => item.path === pathname)
        if (navRefs.current[activeIndex]) {
            const activeButton = navRefs.current[activeIndex]
            setUnderlineStyle({
                left: activeButton.offsetLeft,
                width: activeButton.offsetWidth,
            })
        }
    }, [pathname])

    return (
        <div className='h-fit md:hidden sm:flex max-sm:flex hidden relative z-40 '>
            <div className='fixed bottom-0 left-0 h-16 bg-white border border-t w-full'>
                <div className='relative flex items-center justify-center h-full p-2 overflow-hidden'>
                    {navItems.map((item, index) => (
                        <Link
                            key={item.path}
                            ref={(el) => {
                                navRefs.current[index] = el
                            }}
                            href={item.path}
                            className={`flex items-center justify-center z-20 rounded-none h-full w-full transition-all duration-300 ease-in-out relative`}
                            style={{
                                color: pathname.endsWith(item.path) ? 'white' : 'black',
                            }}
                        >
                            {item.icon}
                        </Link>
                    ))}

                    {/* active box*/}
                    <div
                        className='absolute z-0 bottom-1.5 h-4/5 bg-primary transition-all rounded-md duration-300 ease-in-out'
                        style={{ left: underlineStyle.left, width: underlineStyle.width }}
                    />
                </div>
            </div>
        </div >
    )
}

export default MobileNav
