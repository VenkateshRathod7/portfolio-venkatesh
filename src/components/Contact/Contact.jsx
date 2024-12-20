// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Contact.module.css"; // Import the CSS module

export const Contact = () => {
  return (
    <footer className={styles.contactFooter}  id="contact">
      <div className={styles.contactInfo}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <p className={styles.contactText}>Feel free to reach out!</p>
      </div>
      <ul className={styles.contactList}>
        {/* Gmail */}
        <li className={styles.contactItem}>
          <img
            className={styles.contactIcon}
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Gmail_Logo_2023.png"
            alt="Gmail Icon"
          />
          <a className={styles.contactLink} href="mailto:bhukyavenkatesh722@gmail.com">
          bhukyavenkatesh722@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className={styles.contactItem}>
          <img
            className={styles.contactIcon}
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.png"
            alt="LinkedIn Icon"
          />
          <a
            className={styles.contactLink}
            href="https://www.linkedin.com/in/bhukya-venkatesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
           https://www.linkedin.com/in/bhukya-venkatesh/
          </a>
        </li>

        {/* GitHub */}
        <li className={styles.contactItem}>
          <img
            className={styles.contactIcon}
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub Icon"
          />
          <a
            className={styles.contactLink}
            href="https://github.com/VenkateshRathod7"
            target="_blank"
            rel="noopener noreferrer"
          >https://github.com/VenkateshRathod7
            
          </a>
        </li>
      </ul>
    </footer>
  );
};
