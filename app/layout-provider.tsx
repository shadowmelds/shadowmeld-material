// Use the client directive for using usePathname hook.
'use client'

// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            {!((pathname.match(/\//g) || []).length >= 2) && children}
        </>
    )
};