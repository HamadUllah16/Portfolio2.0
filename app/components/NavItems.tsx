'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setAllWork, setLoading } from '../redux/features/work';
import { Skeleton } from '@/components/ui/skeleton';

function NavItems({ navItems }: { navItems: { link: string, title: string, count: number | null }[] }) {
    const pathname = usePathname();
    const { allWork, loading } = useSelector((state: RootState) => state.work)
    const dispatch = useDispatch<AppDispatch>();

    const getAllWork = async () => {
        try {
            dispatch(setLoading(true))
            const response = await fetch('/api/work', { method: 'GET' });

            if (response.ok) {
                const data = await response.json();
                dispatch(setLoading(false));
                return data.allWork;
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error: any) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (allWork.length === 0) {
            getAllWork()
                .then((data) => {
                    if (data) dispatch(setAllWork(data));
                })
                .catch((err) => console.log(err));
        }
    }, [allWork.length]);

    console.log('Current Pathname:', pathname); // Debugging to check the current path

    return (
        <div className='flex gap-0 relative z-20'>
            {navItems.map((nav) => {
                const isActive = pathname === nav.link || pathname.startsWith(`${nav.link}/`);

                return (
                    <Link
                        key={nav.link}
                        href={nav.link}
                    >
                        <Button
                            variant={isActive ? 'active' : 'inactive'}
                        >
                            {nav.title}
                            <sup>
                                {nav.title === 'Work' ? loading ? <Skeleton className="w-[15px] h-[10px] rounded-full" /> : nav.count : nav.count}

                            </sup>
                        </Button>
                    </Link>
                );
            })}
        </div>
    );
}

export default NavItems