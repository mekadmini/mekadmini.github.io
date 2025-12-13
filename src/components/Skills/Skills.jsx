import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import {useTranslation} from 'react-i18next';

export const Skills = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{t('skills')}</h2>
            <div className={styles.skillsGrid}>
                {skills.map((skill, id) => (
                    <div key={id} className={styles.skillPill}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};