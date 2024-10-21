import { useEffect, useRef } from 'react'

export const useCustomScroll = () => {
    const containerRef = useRef()

    useEffect(() => {
        const container = containerRef.current;

        const handleWheel = (e) => {

            const delta = e.deltaY
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            const start = container.scrollLeft === 0;
            const end = container.scrollLeft === maxScrollLeft;

            
            if ((delta > 0 && end) || (delta < 0 && start)) {
                e.stopPropagation();
            } else {

                e.preventDefault()
                container.scrollLeft += delta
            }
        }

        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false })
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel)
            }
        }
    }, [])

    return containerRef
}
