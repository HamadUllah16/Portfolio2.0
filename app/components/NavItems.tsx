'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setAllWork, setLoading } from '../redux/features/work';
import { Skeleton } from '../../components/ui/skeleton';

function NavItems({ navItems }: { navItems: { link: string, title: string, count: number | null }[] }) {
    const pathname = usePathname();
    const { allWork, loading } = useSelector((state: RootState) => state.work)
    const dispatch = useDispatch<AppDispatch>();
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([])


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
        const activeIndex = navItems.findIndex((item: any) => item.link === pathname)
        if (navRefs.current[activeIndex]) {
            const activeButton = navRefs.current[activeIndex]
            setUnderlineStyle({
                left: activeButton.offsetLeft,
                width: activeButton.offsetWidth,
            })
        }
    }, [pathname])

    useEffect(() => {
        if (allWork.length === 0) {
            getAllWork()
                .then((data) => {
                    if (data) dispatch(setAllWork(data));
                })
                .catch((err) => console.log(err));
        }
    }, [allWork.length]);

    return (
        <div className='flex gap-0 relative flex-wrap'>
            {navItems.map((nav, index) => {
                return (
                    <Link
                        key={nav.link}
                        href={nav.link}
                        ref={(el) => {
                            navRefs.current[index] = el
                        }}
                        style={{
                            color: pathname.endsWith(nav.link) ? 'white' : 'black'
                        }}
                        className='z-10 p-2 transition-all duration-300 ease-in-out flex'
                    >
                        <p className='text-center'>
                            {nav.title}
                        </p>
                        {nav.count &&
                            <p className='px-1 text-xs'>
                                {nav.count}
                            </p>
                        }

                    </Link>
                );
            })}
            <div
                className='absolute z-0 bottom-0 rounded-md h-full bg-primary transition-all duration-300 ease-in-out'
                style={{ left: underlineStyle.left, width: underlineStyle.width }}
            ></div>
        </div>
    );
}

export default NavItems