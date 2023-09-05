import React, { useEffect, useState } from 'react';
import './RandomDotsBackground.css';

const RandomDotsBackground = () => {
    const colors = ['#b243b8', '#3ed9f2', '#fd8148'];
    const speed = 3;
    const circleRadius = 0.8;

    const fixedDots = [
        { left: 10, top: 10 },
        { left: 90, top: 10 },
        { left: 10, top: 90 },
        { left: 90, top: 90 },
        { left: 50, top: 50 },
        { left: 25, top: 75 },
        { left: 75, top: 25 },
        { left: 25, top: 25 },
        { left: 75, top: 75 },
        { left: 50, top: 10 },
    ];

    // Shuffle the colors array
    const shuffledColors = colors
        .map((color) => Array(3).fill(color))
        .flat()
        .sort(() => Math.random() - 0.5);

    const [randomDots, setRandomDots] = useState(
        fixedDots.map((dot, index) => ({
            ...dot,
            color: shuffledColors[index],
            deltaX: (Math.random() - 0.5) * 2,
            deltaY: (Math.random() - 0.5) * 2,
            angle: Math.random() * 360
        }))
    );

    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const circleInterval = setInterval(() => {
            setRandomDots(prevDots =>
                prevDots.map(dot => {
                    const newAngle = (dot.angle + 1) % 360;
                    return {
                        ...dot,
                        left: dot.left + circleRadius * Math.cos(newAngle * (Math.PI / 180)),
                        top: dot.top + circleRadius * Math.sin(newAngle * (Math.PI / 180)),
                        angle: newAngle
                    };
                })
            );
        }, 50);

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const direction = currentScrollTop > lastScrollTop ? 1 : -1;

            setRandomDots(prevDots => 
                prevDots.map(dot => {
                    let newDeltaX = dot.deltaX;
                    let newDeltaY = dot.deltaY;
                    let newLeft = dot.left + (dot.deltaX * speed * direction);
                    let newTop = dot.top + (dot.deltaY * speed * direction);

                    if (newLeft > 100 || newLeft < 0) {
                        newDeltaX = -dot.deltaX;
                        newLeft = dot.left + (newDeltaX * speed * direction);
                    }

                    if (newTop > 100 || newTop < 0) {
                        newDeltaY = -dot.deltaY;
                        newTop = dot.top + (newDeltaY * speed * direction);
                    }

                    return {
                        ...dot,
                        left: newLeft,
                        top: newTop,
                        deltaX: newDeltaX,
                        deltaY: newDeltaY
                    };
                })
            );

            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(circleInterval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <div className="randomDotsContainer">
            {randomDots.map((dot, idx) => (
                <div 
                    key={idx} 
                    style={{ 
                        left: `${dot.left}%`, 
                        top: `${dot.top}%`, 
                        backgroundColor: dot.color 
                    }} 
                    className="randomDot"
                ></div>
            ))}
        </div>
    );
};

export default RandomDotsBackground;
