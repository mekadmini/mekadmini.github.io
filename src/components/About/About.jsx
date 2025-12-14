import React from "react";
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";
import {useTranslation} from 'react-i18next';

import aboutEn from "../../data/about_en.json";
import aboutDe from "../../data/about_de.json";

export const About = () => {
    const {t, i18n} = useTranslation();

    const aboutData = i18n.language === 'de' ? aboutDe : aboutEn;

    return (
        <section className={styles.container} id="about">
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{aboutData.title}</h2>
                    {aboutData.description.map((paragraph, index) => (
                        <p key={index} className={styles.paragraph}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className={styles.imageContainer}>
                    {aboutData.images.map((img, index) => (
                        <img
                            key={index}
                            src={getImageUrl(img)}
                            alt={`About me ${index + 1}`}
                            className={styles.aboutImage}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};