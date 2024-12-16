"use client";

import { useState, useEffect } from 'react';

export function useScreenSize() {
    function getScreenSize() {
        if (typeof window !== 'undefined') {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        }
        return {
            width: 0,
            height: 0,
        };
    }

    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        function handleResize() {
            setScreenSize(getScreenSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
}