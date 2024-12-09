'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

function MobileNav() {
    const router = useRouter()
    const pathname = usePathname()
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

    const navItems = [
        { label: 'Work', path: '/' },
        { label: 'Experience', path: '/experience' },
        { label: 'About', path: '/about' },
        { label: 'Freelance', path: '/freelance' },
    ]

    // Update underline position based on active nav item
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
        <div className='h-16 max-sm:block hidden relative z-40'>
            <div className='fixed bottom-0 left-0 h-16 bg-gradient-to-r from-violet-400 to-purple-300 w-full'>
                <div className='relative flex items-center justify-center h-full'>
                    {navItems.map((item, index) => (
                        <Link
                            key={item.path}
                            ref={(el) => {
                                navRefs.current[index] = el
                            }}
                            href={item.path}
                            // onClick={() => router.push(item.path)}
                            // size='sm'
                            className={`flex items-center justify-center z-20 rounded-none h-full w-full transition-all duration-300 ease-in-out relative`}
                            // variant={'ghost'}
                            style={{
                                color: pathname.endsWith(item.path) ? 'white' : 'black'
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* active box*/}
                    <div
                        className='absolute z-0 bottom-0 h-full bg-black transition-all duration-300 ease-in-out'
                        style={{ left: underlineStyle.left, width: underlineStyle.width }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MobileNav
