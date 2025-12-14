import React, {useState} from "react";
import styles from "./Projects.module.css";
import {useTranslation} from 'react-i18next';
import {getImageUrl} from "../../utils";

import projectsEn from "../../data/projects_en.json";
import projectsDe from "../../data/projects_de.json";

export const Projects = () => {
    const {t, i18n} = useTranslation();
    const [filter, setFilter] = useState("All");

    const projectsData = i18n.language === 'de' ? projectsDe : projectsEn;

    const filters = ["All", "WebDev", "Data Science"];

    const filteredProjects = projectsData.filter((project) => {
        if (filter === "All") return true;
        return project.category === filter;
    });

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>{t('projects')}</h2>

            <div className={styles.filterContainer}>
                {filters.map((category) => (
                    <button
                        key={category}
                        className={`${styles.filterBtn} ${filter === category ? styles.activeFilter : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.projectsGrid}>
                {filteredProjects.map((project, id) => {
                    return (
                        <div key={id} className={styles.card}>
                            <img
                                src={getImageUrl(project.imgSrc)}
                                alt={`Image of ${project.title}`}
                                className={styles.imgSrc}
                            />
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <ul className={styles.skills}>
                                {project.skills.map((skill, id) => (
                                    <li key={id} className={styles.skill}>{skill}</li>
                                ))}
                            </ul>
                            <div className={styles.linksContainer}>
                                {project.link && (
                                    <a href={project.link} className={styles.linkBtn} target="_blank"
                                       rel="noopener noreferrer">
                                        {t('link')}
                                    </a>
                                )}
                                {project.source && (
                                    <a href={project.source} className={styles.linkBtn} target="_blank"
                                       rel="noopener noreferrer">
                                        {t('source')}
                                    </a>
                                )}
                                {project.video && (
                                    <a href={project.video} className={styles.linkBtn} target="_blank"
                                       rel="noopener noreferrer">
                                        {t('video')}
                                    </a>
                                )}
                                {project.report && (
                                    <a href={project.report} className={styles.linkBtn} target="_blank"
                                       rel="noopener noreferrer">
                                        {t('report')}
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};