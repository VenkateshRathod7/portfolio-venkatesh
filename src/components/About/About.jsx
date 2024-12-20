// eslint-disable-next-line no-unused-vars
import React from "react";
import AboutImage from './About.png'; 
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.aboutSection} id="about">  {/* Ensure id="about" here */}
            <h2>About</h2>
            <div className={styles.contentWrapper}>
                <img src={AboutImage} alt="about-image" className={styles.aboutImage} />
                <ul className={styles.skillsList}>
                    <li className={styles.skillItem}>
                        <h3>Frontend Developer</h3>
                        <p>I am passionate about building modern, interactive web applications and have experience using React to create dynamic user interfaces.</p>
                    </li>
                    <li className={styles.skillItem}>
                        <h3>Backend Developer</h3>
                        <p>I am eager to learn backend development and have started exploring Node.js and Express for building simple server-side applications.</p>
                    </li>
                    <li className={styles.skillItem}>
                        <h3>UI Designer</h3>
                        <p>I enjoy working on the design aspect of web applications and have a basic understanding of UI design principles, aiming to create user-friendly and visually pleasing interfaces.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};
