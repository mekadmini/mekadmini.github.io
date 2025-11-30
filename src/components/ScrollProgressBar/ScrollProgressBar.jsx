import React, {useEffect, useState} from "react";
import styles from "./ScrollProgressBar.module.css";

export const ScrollProgressBar = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollWidth(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBar}
                style={{width: `${scrollWidth}%`}}
            />
        </div>
    );
};