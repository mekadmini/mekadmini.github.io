import React, {useState} from "react";
import {useTranslation} from 'react-i18next';
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => {
            console.log('Language changed to:', lng);
        }).catch((err) => {
            console.error('Error changing language:', err);
        });
    };
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">mekadmini</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                     src={menuOpen ? getImageUrl("nav/menuIcon.png") : getImageUrl("nav/menuIcon.png")}
                     alt="menu-dash-button" width="40" onClick={() => setMenuOpen(!menuOpen)}></img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#projects">{t('projects')}</a></li>
                    <li><a href="#experience">{t('experience')}</a></li>
                    <li><a href="#education">{t('education')}</a></li>
                    <li><a href="#contact">{t('contact')}</a></li>
                    <button className={styles.langBtn}
                            onClick={() => changeLanguage(i18n.language === 'en' ? 'de' : 'en')}>
                        {i18n.language === 'en' ? 'DE' : 'EN'}
                    </button>
                </ul>
            </div>
        </nav>
    )
}