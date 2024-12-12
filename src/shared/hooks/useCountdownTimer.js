import { useState, useEffect, useCallback } from 'react';

function useCountdownTimer(endTime) {

    const calculateTimeLeft = useCallback(() => {
        const difference = new Date(endTime) - new Date();
        let localTimeLeft = {}

        if (difference > 0) {
            localTimeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return localTimeLeft
    }, [endTime])

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft()
            setTimeLeft(newTimeLeft)

            if (Object.keys(newTimeLeft).length === 0) {
                clearInterval(timer)
                setIsRunning(false)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [calculateTimeLeft, isRunning])

    const timeItems = [
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Sec' }
    ];

    return { timeItems, isRunning }
}

export default useCountdownTimer;
