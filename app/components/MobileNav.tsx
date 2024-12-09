'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../components/ui/button'
import { usePathname, useRouter } from 'next/navigation'

function MobileNav() {
    const router = useRouter()
    const pathname = usePathname()
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
    const navRefs = useRef<(HTMLButtonElement | null)[]>([])

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
        <div className='h-16 max-sm:block hidden'>
            <div className='fixed bottom-0 h-16 bg-gradient-to-r from-violet-400 to-purple-300 w-full z-30'>
                <div className='relative flex items-center justify-center h-full'>
                    {navItems.map((item, index) => (
                        <Button
                            key={item.path}
                            ref={(el) => {
                                navRefs.current[index] = el
                            }}
                            onClick={() => router.push(item.path)}
                            size='sm'
                            className={` z-20 rounded-none h-full w-full transition-all duration-300 ease-in-out relative`}
                            variant={'ghost'}
                            style={{
                                color: pathname.endsWith(item.path) ? 'white' : 'black'
                            }}
                        >
                            {item.label}
                        </Button>
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
