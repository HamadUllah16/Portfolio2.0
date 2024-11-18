// components/KeyPressToast.tsx

'use client';

import { toast } from 'sonner';
import { useEffect } from 'react';

export default function CopyEmail() {

    const email = 'hamadullah16@gmail.com';

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === 'c') {
            navigator.clipboard.writeText(email).then(() => {
                toast.success('Email copied!', {
                    description: `Copied to clipboard.`,
                });
            }).catch(() => {

                // toast.error('Failed to copy email.');
            });
        }
    };


    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return null;
}
