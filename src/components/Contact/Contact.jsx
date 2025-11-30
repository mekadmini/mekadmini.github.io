import React from "react"
import { useTranslation } from 'react-i18next';
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
    const { t } = useTranslation();
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>{t('contact')}</h2>
                <p>{t('feel free to contact me')}</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/mekadmini/">in/mekadmini</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github-white.png")} alt="Github icon" />
                    <a href="https://github.com/mekadmini">@mekadmini</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/gitlab.png")} alt="Gitlab icon" />
                    <a href="https://gitlab.com/mekadmini">@mekadmini</a>
                </li>
            </ul>
        </footer>
    );
}