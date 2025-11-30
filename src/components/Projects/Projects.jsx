import React, {useEffect, useState} from "react"
import styles from "./Projects.module.css"
import {useTranslation} from 'react-i18next';
import {getImageUrl} from "../../utils"

export const Projects = ({ language }) => {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsModule = await import(`../../data/projects_${i18n.language}.json`);
                setProjects(projectsModule.default);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects([]);
            }
        };

        fetchProjects();
    }, [i18n.language]);

    return (
        <section className={styles.container}>
            <h2 className={styles.title} id="projects">{t('projects')}</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project, id) => {
                    return (
                        <div key={id} className={styles.card}>
                            <img src={getImageUrl(project.imgSrc)} alt={`Image of ${project.title}`}
                                 className={styles.imgSrc}></img>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <ul className={styles.skills}>
                                {project.skills.map((skill, id) => (
                                    <li key={id} className={styles.skill}>{skill}</li>
                                ))}
                            </ul>
                            <div className={styles.linksContainer}>
                                {project.link && <a href={project.link} className={styles.linkBtn}>{t('link')}</a>}
                                {project.source &&
                                    <a href={project.source} className={styles.linkBtn}>{t('source')}</a>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}