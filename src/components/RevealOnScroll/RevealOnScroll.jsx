import React, {useEffect, useRef, useState} from 'react';
import styles from './RevealOnScroll.module.css';

export const RevealOnScroll = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        }, {
            threshold: 0.15 // Trigger when 15% of the element is visible
        });

        if (ref.current) {
            scrollObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`${styles.reveal} ${isVisible ? styles.visible : ''}`}>
            {children}
        </div>
    );
};