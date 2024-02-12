import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign Up Now! Offer Expires In:</h2>
            <div className="text-4xl font-bold text-sage-green mb-4">{formatTime(timeLeft)}</div>

        </div>
    );
};

export default CountdownTimer;
