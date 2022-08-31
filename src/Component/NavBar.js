import React from "react";
import styles from "./NavBar.module.css"
import logo from "../images/logo.jpg"

export default function NavBar() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.menu}>
                    <ul className={styles.list}>
                        <li><a href="url/sd">Home</a></li>
                        <li><a href="url/sd">News</a></li>
                        <li><a href="url/sd">About Us</a></li>
                    </ul>
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt={logo} className={styles.itemp} />
                </div>
            </div>
        </>
    )
}