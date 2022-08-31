import React from "react";
import styles from "./Banner.module.css"
import banner from "../images/banner.jpg"

export default function Banner() {
    return (
        <>
            <div className={styles.imageb}>
                <img src={banner} alt="banner" />
            </div>
            <div className={styles.title}>
                <p>New Section</p>
                <p>We're Learning <span>React.js</span></p>
            </div>
        </>
    )
}