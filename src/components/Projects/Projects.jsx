
// eslint-disable-next-line no-unused-vars
import React from "react";
import projects from "../../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";  

export const Projects = () => {
  return (
    <section className={styles.projectsSection} id="Projects">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, id) => {
          return (
            <ProjectCard
              key={id}
              project={project}
            />
          );
        })}
      </div>
    </section>
  );
};
