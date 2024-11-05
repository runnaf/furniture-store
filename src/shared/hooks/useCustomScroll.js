import { useEffect, useRef, useCallback } from 'react';

export const useCustomScroll = () => {
    const containerRef = useRef(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const handleMouseDown = useCallback((e) => {
        isDragging.current = true
        startX.current = e.pageX - containerRef.current.offsetLeft
        scrollLeft.current = containerRef.current.scrollLeft
    }, [])

    const handleMouseLeave = useCallback(() => {
        isDragging.current = false
    }, [])

    const handleMouseUp = useCallback(() => {
        isDragging.current = false
    }, [])

    const handleMouseMove = useCallback((e) => {
        if (!isDragging.current) return;
        e.preventDefault()
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX.current); 
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    }, [])

    const handleWheel = useCallback((e) => {
        containerRef.current.scrollLeft += e.deltaX; 
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            container.addEventListener('mousedown', handleMouseDown)
            container.addEventListener('mouseleave', handleMouseLeave)
            container.addEventListener('mouseup', handleMouseUp)
            container.addEventListener('mousemove', handleMouseMove)
            container.addEventListener('wheel', handleWheel, { passive: false })
        }

        return () => {
            if (container) {
                container.removeEventListener('mousedown', handleMouseDown)
                container.removeEventListener('mouseleave', handleMouseLeave)
                container.removeEventListener('mouseup', handleMouseUp)
                container.removeEventListener('mousemove', handleMouseMove)
                container.removeEventListener('wheel', handleWheel)
            }
        }
    }, [handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove, handleWheel])

    return containerRef
}
