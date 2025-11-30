import React from "react"
import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils";
import {useTranslation} from 'react-i18next';

export const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.titleTyping}>{t('hello')}</h1>
                <h1 className={styles.title}>{t('i am mohamed')}</h1>
                <p className={styles.description}>{t('hero description')}</p>
                <a href="#contact" className={styles.contactBtn}>{t('contact me')}</a>
            </div>
            <img src={getImageUrl("hero/mohamed.jpg")} alt="image of me" className={styles.heroImg}></img>

            {/* New Clear Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div className={styles.arrow}></div>
            </div>
        </section>
    );
}