// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./ProjectCard.module.css";  

export const ProjectCard = ({ project: { title, imagesrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.projectCard}>
      <img className={styles.projectImage} src={imagesrc} alt={title} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <ul className={styles.projectSkills}>
        {skills.map((skill, id) =>{return (
          <li key={id} className={styles.skillItem}>{skill}</li>  // Corrected: Removed the unnecessary 'return'
        );
        })}
      </ul>
      <div className={styles.projectLinks}>
        <a className={styles.demoLink} href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
        <a className={styles.sourceLink} href={source} target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};
