import React, {useState} from "react";
import {useTranslation} from 'react-i18next';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";
import {useScrollSpy} from "../../hooks/useScrollSpy";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {t, i18n} = useTranslation();

    const sectionIds = ["about", "projects", "experience", "education", "contact"];
    const activeSection = useScrollSpy(sectionIds, 300); // 300px offset for better trigger

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    {sectionIds.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className={activeSection === item ? styles.active : ""}
                            >
                                {t(item)}
                            </a>
                        </li>
                    ))}

                    <button
                        className={styles.langBtn}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent menu close when clicking language
                            changeLanguage(i18n.language === 'en' ? 'de' : 'en');
                        }}
                    >
                        {i18n.language === 'en' ? 'DE' : 'EN'}
                    </button>
                </ul>
            </div>
        </nav>
    );
};