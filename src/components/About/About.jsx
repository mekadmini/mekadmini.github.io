import React, {useEffect, useState} from "react";
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";
import {useTranslation} from 'react-i18next';

export const About = () => {
    const {t, i18n} = useTranslation();
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const data = await import(`../../data/about_${i18n.language}.json`);
                setAboutData(data.default);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };

        fetchAbout();
    }, [i18n.language]);

    // FIX: Removed the "if (!aboutData) return null;" line.
    // Now we always render the section so the Navbar can find the ID.

    return (
        <section className={styles.container} id="about">
            {aboutData && (
                <div className={styles.content}>
                    {/* Left Side: Text */}
                    <div className={styles.textContainer}>
                        <h2 className={styles.title}>{aboutData.title}</h2>
                        {aboutData.description.map((paragraph, index) => (
                            <p key={index} className={styles.paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Right Side: Image Collage */}
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
            )}
        </section>
    );
};