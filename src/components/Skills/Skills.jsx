import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import {useTranslation} from 'react-i18next';

export const Skills = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>{t('skills')}</h2>

            <div className={styles.categoriesContainer}>
                {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={index} className={styles.categoryGroup}>
                        <h3 className={styles.categoryTitle}>{t(category)}</h3>
                        <div className={styles.skillsGrid}>
                            {skillList.map((skill, id) => (
                                <div key={id} className={styles.skillPill}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};