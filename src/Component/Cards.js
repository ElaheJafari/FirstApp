import React from "react";
import styles from "./Cards.module.css"



export default function Cards(props) {

    return (
        <>
            <div className={styles.container}>
                <img src={props.image} alt="card" />
                <div className={styles.cardtitle}>
                    <p>{props.title}</p>
                    <p>{props.prise}</p>
                </div>
            </div>
        </>
    )
}