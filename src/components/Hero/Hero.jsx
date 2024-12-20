// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Hero.module.css';
import heroImage from './Hero.png'; // Correctly importing the image

export const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi,I 'm Venkatesh</h1>
                <p className={styles.decription}>
                    A tech enthusiast with a BTech in IT, I specialize in the MERN stack and am exploring blockchain technology. Passionate about creating user-friendly, scalable applications, I aim to merge technology and business to deliver impactful solutions. Let’s connect!
                </p>
                <a className={styles.contactLink} href="mailto:bhukyavenkatesh722@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImage} src={heroImage} alt="Hero" />
        </section>
    );
};
