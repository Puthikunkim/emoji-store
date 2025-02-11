import { useState, useContext } from "react";
import ShopContext from "../../../context";
import styles from "./CardContainer.module.css";
import Card from "./Card/Card";  

function CardContainer() {
    const { fruits, setFruits } = useContext(ShopContext);
    return (
        <div className={styles.cardContainer}>
            <Card product={fruits[0]}/>
            <Card product={fruits[1]}/>
            <Card product={fruits[2]}/>
        </div>
    )
}

export default CardContainer