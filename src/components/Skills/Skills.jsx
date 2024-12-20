// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section id="skills" className={styles.containerSkills}>
      <h2>My Skills</h2>
      <div className={styles.skillsContainer}>
        {/* Frontend Skills */}
        <div className={styles.frontendSkills}>
          <h3>Frontend Skills</h3>
          <ul className={styles.skillsContent}>
            <li className={`${styles.skillsDetails} ${styles.html}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt="HTML"
              />
              <h4>HTML</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.css}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="CSS"
              />
              <h4>CSS</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.bootstrap}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/bootstrap.png"
                alt="Bootstrap"
              />
              <h4>Bootstrap</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.tailwind}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
              />
              <h4>Tailwind CSS</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.javascript}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt="JavaScript"
              />
              <h4>JavaScript</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.react}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/officel/80/000000/react.png"
                alt="React"
              />
              <h4>React</h4>
            </li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className={styles.backendSkills}>
          <h3>Backend Skills</h3>
          <ul className={styles.skillsContent}>
            <li className={`${styles.skillsDetails} ${styles.node}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="Node.js"
              />
              <h4>Node.js</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.express}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/ios/50/000000/express-js.png"
                alt="Express.js"
              />
              <h4>Express.js</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.mongodb}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="MongoDB"
              />
              <h4>MongoDB</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.sqlite}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg"
                alt="SQLite"
              />
              <h4>SQLite</h4>
            </li>
          </ul>
        </div>

        {/* Cloud Skills */}
        <div className={styles.cloudSkills}>
          <h3>Cloud Skills</h3>
          <ul className={styles.skillsContent}>
            <li className={`${styles.skillsDetails} ${styles.gcp}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/google-cloud.png"
                alt="GCP"
              />
              <h4>GCP</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.aws}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
                alt="AWS"
              />
              <h4>AWS</h4>
            </li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className={styles.otherTools}>
          <h3>Other Skills</h3>
          <ul className={styles.skillsContent}>
            <li className={`${styles.skillsDetails} ${styles.git}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/ios-filled/50/000000/git.png"
                alt="Git"
              />
              <h4>Git</h4>
            </li>
            <li className={`${styles.skillsDetails} ${styles.github}`}>
              <img
                className={styles.skillsDetailsIcon}
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="GitHub"
              />
              <h4>GitHub</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
