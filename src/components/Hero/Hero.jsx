import React, {useEffect, useState} from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";
import {useTranslation} from 'react-i18next';

export const Hero = () => {
    const {t} = useTranslation();

    // Rotating Text Logic with Translations
    const roles = [t('role_1'), t('role_2'), t('role_3')];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [roles.length]); // Depend on roles length which is stable, or empty dependency is fine too

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.titleTyping}>{t('hello')}</h1>
                <h1 className={styles.title}>
                    {t('i am mohamed')}
                    <br/>
                    {/* Using translation for the prefix */}
                    <span className={styles.staticText}>{t('im_a')}</span>
                    {/* key={index} ensures animation restarts when text changes */}
                    <span key={index} className={styles.dynamicText}>
                        {roles[index]}
                    </span>
                </h1>
                <p className={styles.description}>{t('hero description')}</p>

                <div className={styles.btnContainer}>
                    <a href="#contact" className={styles.contactBtn}>{t('contact me')}</a>
                    <a href="/public_resume.pdf" download className={styles.resumeBtn}>
                        {t('download_cv')}
                    </a>
                </div>
            </div>

            <img src={getImageUrl("hero/mohamed.jpg")} alt="image of me" className={styles.heroImg}></img>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div className={styles.arrow}></div>
            </div>
        </section>
    );
}