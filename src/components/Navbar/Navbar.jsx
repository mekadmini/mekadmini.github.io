import React, {useEffect, useState} from "react";
import {useTranslation} from 'react-i18next';
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section, footer");

        const observerOptions = {
            root: null,
            // Critical Fix: "-45% 0px -45% 0px" means the section must cover the CENTER 10% of the screen to activate.
            // This prevents "Contact" from activating until it's truly in focus.
            rootMargin: "-45% 0px -45% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            if (section.id) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section.id) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">mekadmini</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    width="40"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#projects" className={activeSection === "projects" ? styles.active : ""}>
                            {t('projects')}
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className={activeSection === "experience" ? styles.active : ""}>
                            {t('experience')}
                        </a>
                    </li>
                    <li>
                        <a href="#education" className={activeSection === "education" ? styles.active : ""}>
                            {t('education')}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={activeSection === "contact" ? styles.active : ""}>
                            {t('contact')}
                        </a>
                    </li>
                    <button className={styles.langBtn}
                            onClick={() => changeLanguage(i18n.language === 'en' ? 'de' : 'en')}>
                        {i18n.language === 'en' ? 'DE' : 'EN'}
                    </button>
                </ul>
            </div>
        </nav>
    )
}