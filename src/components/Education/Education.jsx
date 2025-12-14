import React from "react";
import styles from "./Education.module.css";
import {useTranslation} from 'react-i18next';
import {getImageUrl} from "../../utils";

import educationEn from "../../data/education_en.json";
import educationDe from "../../data/education_de.json";

export const Education = () => {
    const {t, i18n} = useTranslation();

    const education = i18n.language === 'de' ? educationDe : educationEn;

    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>{t('education')}</h2>
            <div className={styles.timeline}>
                {education.map((edu, id) => {
                    return (
                        <div key={id} className={styles.timelineItem}>
                            <div className={styles.cardHeader}>
                                <a href={edu.link} target="_blank" rel="noopener noreferrer">
                                    <img src={getImageUrl(edu.imgSrc)} className={styles.imgSrc} alt={edu.title}/>
                                </a>
                                <h3 className={styles.titleText}>{edu.title}</h3>
                                <h4 className={styles.institute}>{edu.institute}</h4>
                                <h4 className={styles.year}>{edu.year}</h4>
                            </div>
                            <div className={styles.timelineContent}>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};