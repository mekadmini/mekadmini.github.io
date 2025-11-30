import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <section className={styles.footer}>
            <p>© {new Date().getFullYear()} Mohamed Mekadmini.</p>
        </section>
    );
};