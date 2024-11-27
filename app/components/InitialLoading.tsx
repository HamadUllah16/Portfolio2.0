'use client';
import { useEffect, useState } from 'react';
import { Progress } from '../../components/ui/progress';

export default function InitialLoading() {
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + Math.random() * 10 : 100));
        }, 200);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const handleLoad = () => {
            setProgress(100);
        };

        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className={`${progress === 100 ? 'opacity-0 -z-50' : 'opacity-100 z-50'} bg-white flex-col gap-5 transition-all duration-300 ease-in-out fixed inset-0 flex items-center justify-center "`}>
            <div className={`flex flex-col gap-2 w-full justify-center items-center`}>
                <div className="flex flex-col w-4/5 max-w-lg gap-4">
                    <div>
                        <Progress value={progress} max={100} className="h-2 transition-all duration-300 ease-in-out" />
                        <p className="text-center mt-4 font-bold text-red-400">Loading... {Math.floor(progress)}%</p>
                    </div>
                    <div className='flex'>
                        <p className='font-thin'>
                            <span className='font-bold'>Tip:</span> Press <span className='px-2 py-1 bg-slate-500 rounded-lg text-white'>Ctrl</span> + <span className='px-2 py-1 bg-slate-500 rounded-lg text-white'>C</span> to copy the email.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
