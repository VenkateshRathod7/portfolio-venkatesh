// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen 
                        ? "https://cdn-icons-png.flaticon.com/512/1828/1828778.png" // Close icon (X)
                        : "https://cdn-icons-png.flaticon.com/512/1828/1828859.png" // Menu icon (≡)
                    }
                    alt="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle menuOpen state
                />
               
                <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>  {/* Changed from "about" to "#about" */}
                    </li>
                    <li>
                    <a href="#skills">Skills</a>

                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
