import React from "react";
import styles from "./Search.module.css"

export default function Search() {
    return (
        <div className={styles.container}>
        <div className={styles.titr}>Search what do you want</div>
        <input className={styles.searchbox} placeholder="Search ..." />
        </div>
    )
}