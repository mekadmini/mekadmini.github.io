import React, {useEffect, useState} from "react"
import styles from "./Experience.module.css"
import {useTranslation} from 'react-i18next';
import {getImageUrl} from "../../utils"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


export const Experience = ({ language }) => {
    const { t, i18n } = useTranslation();
    const [experience, setExperience] = useState([]);
    // alert(i18n.language);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const experienceModule = await import(`../../data/experience_${i18n.language}.json`);
                setExperience(experienceModule.default);
            } catch (error) {
                console.error('Error fetching experiences:', error);
                setExperience([]);
            }
        };

        fetchExperience();
    }, [i18n.language]);
    return (
        <section className={styles.container}>
            <h2 className={styles.title} id="experience">{t('experience')}</h2>
            <div className={styles.timeline}>
                {experience.map((myExperience, id) => {
                    return (
                        <div key={id} className={styles.timelineItem}>
                            <div className={styles.cardHeader}>
                                <a href={myExperience.link} target="_blank" rel="noopener noreferrer">
                                    <img src={getImageUrl(myExperience.imgSrc)} className={styles.imgSrc}
                                         alt={myExperience.title}/>
                                </a>
                                <h3 className={styles.titleText}>{myExperience.title}</h3>
                                <h4 className={styles.institute}>{myExperience.institute}</h4>
                                <h4 className={styles.year}>{myExperience.year}</h4>
                            </div>
                            <div className={styles.timelineContent}>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {myExperience.description}
                                </ReactMarkdown>
                            </div>
                        </div>

                    );
                })}

            </div>
        </section>
    );

}