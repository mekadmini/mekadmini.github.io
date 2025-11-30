import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import {useTranslation} from 'react-i18next';

export const Skills = () => {
    const {t} = useTranslation();

    // Duplicate the list to ensure seamless infinite scrolling
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{t('skills')}</h2>
            <div className={styles.marquee}>
                <div className={styles.marqueeContent}>
                    {duplicatedSkills.map((skill, id) => (
                        <div key={id} className={styles.skillPill}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};