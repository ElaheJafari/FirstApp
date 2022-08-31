import React from "react";
import Cards from "./Cards";
import styles from "./Cards.module.css"
import iphone from "../images/iphonex.jpg";
import iphone13 from "../images/iphone13.jpg";
import iphone13pro from "../images/iphone13pro.jpg";
import iphone11 from "../images/iphone11.jpg";

export default function Card() {
    function items() {
        let Array = [];
        let items = [{ title: "iphone", prise: "200$", image: iphone },
        { title: "iphone 13", prise: "600$", image: iphone13 },
        { title: "iphone 13pro", prise: "900$", image: iphone13pro },
        { title: "iphone 11", prise: "500$", image: iphone11 }]
        for (let index = 0; index < items.length; index++) {
            const { title, prise, image } = items[index]
            Array.push(<Cards key={index} title={title} prise={prise} image={image} />)

        }
        return Array;
    }
    return (

        // <>
        <div className={styles.cardsbox}>
            {items()}
            {/* //<Cards title={"iphone X"} prise={"200$"} image={iphone} />
        //         <Cards title={"iphone 13"} prise={"600$"} image={iphone13} />
        //         <Cards title={"iphone 13pro"} prise={"900$"} image={iphone13pro} />
        //         <Cards title={"iphone 11"} prise={"500$"} image={iphone11} /> */}
        </div>
        // </>
    )
}