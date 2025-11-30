import React, { useEffect, useState } from "react";
import styles from "./Education.module.css";
import { useTranslation } from 'react-i18next';
import { getImageUrl } from "../../utils";

export const Education = () => {
    const { t, i18n } = useTranslation();
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const educationModule = await import(`../../data/education_${i18n.language}.json`);
                setEducation(educationModule.default);
            } catch (error) {
                console.error('Error fetching education:', error);
                setEducation([]);
            }
        };

        fetchEducation();
    }, [i18n.language]);

    return (
        <section className={styles.container}>
            <h2 className={styles.title} id="education">{t('education')}</h2>
            <div className={styles.timeline}>
                {education.map((edu, id) => {
                    return (
                        <div key={id} className={styles.timelineItem}>
                            <div className={styles.cardHeader}>
                                <a href={edu.link} target="_blank" rel="noopener noreferrer">
                                    <img src={getImageUrl(edu.imgSrc)} className={styles.imgSrc} alt={edu.title} />
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