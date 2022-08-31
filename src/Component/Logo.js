import React from "react";
import styles from "./Logo.module.css"
import logo1 from "../images/9.jpg"
import logo2 from "../images/10.jpg"
import logo3 from "../images/11.jpg"


export default function Logo() {
    return (
        <div className={styles.container}>
            <div className={styles.titr}>Who supports us?</div>
            <div className={styles.images}>
                <img src={logo1} alt="APPLE" />
                <img src={logo2} alt="SAMSUNG" />
                <img src={logo3} alt="XIAOMI" />
            </div>
        </div>
    )
}