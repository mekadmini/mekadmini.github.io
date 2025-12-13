import React from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";
import {useTranslation} from 'react-i18next';

export const Hero = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {t('i am mohamed')}
                </h1>
                <h2 className={styles.subtitle}>
                    {t('role_title')}
                </h2>
                <p className={styles.description}>{t('hero description')}</p>

                <div className={styles.btnContainer}>
                    <a href="#contact" className={styles.contactBtn}>{t('contact me')}</a>
                    <a href="/public_resume.pdf" download className={styles.resumeBtn}>
                        {t('download_cv')}
                    </a>
                </div>
            </div>

            <img src={getImageUrl("hero/mohamed.jpg")} alt="Mohamed Mekadmini" className={styles.heroImg}></img>
        </section>
    );
}