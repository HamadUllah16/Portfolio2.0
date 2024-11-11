'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function NavItems({ navItems }: { navItems: { link: string, title: string }[] }) {
    const pathname = usePathname();

    console.log('Current Pathname:', pathname); // Debugging to check the current path

    return (
        <div className='flex gap-0 relative z-20'>
            {navItems.map((nav) => {
                const isActive = pathname === nav.link || pathname.startsWith(`${nav.link}/`);

                return (
                    <Link
                        key={nav.link}
                        href={nav.link}>
                        <Button
                            variant={isActive ? 'active' : 'inactive'}
                        >
                            {nav.title}
                        </Button>
                    </Link>
                );
            })}
        </div>
    );
}

export default NavItems