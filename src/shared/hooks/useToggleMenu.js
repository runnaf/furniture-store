import { useState, useRef, useEffect, useCallback } from 'react';

export const useToggleMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false); 
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return {
        isOpen,
        closeMenu,
        toggleMenu,
        menuRef,
    }
}

