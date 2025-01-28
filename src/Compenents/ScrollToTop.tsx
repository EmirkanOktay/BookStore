import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const clickForScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                display: isVisible ? 'block' : 'none'
            }}
        >
            <button
                onClick={clickForScroll}
                style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                }}
            >
                <ArrowUpwardIcon />
            </button>
        </div>
    );
}

export default ScrollToTop;
