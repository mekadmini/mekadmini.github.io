import {useEffect, useState} from 'react';

export const useScrollSpy = (ids, offset = 100) => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        let timeoutId = null;

        const listener = () => {
            if (timeoutId) return;

            // Throttle to run max once every 100ms
            timeoutId = setTimeout(() => {
                const scrollPosition = window.scrollY + offset;

                let newActiveId = "";

                // Find the section that covers the scroll position
                for (const id of ids) {
                    const element = document.getElementById(id);
                    if (!element) continue;

                    const top = element.offsetTop;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        newActiveId = id;
                        break;
                    }
                }

                if (newActiveId !== activeId) {
                    setActiveId(newActiveId);
                }
                timeoutId = null;
            }, 100);
        };

        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [ids, offset]);

    return activeId;
};