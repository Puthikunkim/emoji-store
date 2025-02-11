import { useState, useContext } from "react";
import ShopContext from "../../../context";
import styles from "./CardContainer.module.css";
import Card from "./Card/Card";  

function CardContainer() {
    const { fruits, setFruits } = useContext(ShopContext);


    return (
        <div className={styles.cardContainer}>
            <div className={styles.header}><h3>Items</h3></div>
            <div className={styles.body}>
                {fruits.map((fruit, index) => (
                    <Card key={index} product={fruit} />
                ))}
            </div>
        </div>
    )
}

export default CardContainer