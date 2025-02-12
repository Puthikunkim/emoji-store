import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Card.module.css";
import ShopContext from "../../../../context";
import { HeartStraight, BagSimple } from "@phosphor-icons/react";

function Card({ product }) {
    const navigate = useNavigate(); // Create navigate function
    const { fruits, setFruits } = useContext(ShopContext);
    const { id, name, price, img, family, isFavourited, quantity } = product;

    const toggleFavourite = (e) => {
        e.stopPropagation(); // Prevent navigation
        const updatedFruits = [...fruits];
        updatedFruits[id].isFavourited = !updatedFruits[id].isFavourited;
        setFruits(updatedFruits);
    };

    const toggleCart = (e) => {
        e.stopPropagation(); // Prevent navigation
        const updatedFruits = [...fruits];
        updatedFruits[id].quantity = updatedFruits[id].quantity === 0 ? 1 : 0;
        setFruits(updatedFruits);
    };

    const handleCardClick = () => {
        navigate(`/store/${encodeURIComponent(name.toLowerCase())}`); // Navigate to the product page
    };

    return (
        <div className={styles.card} onClick={handleCardClick}>
            <img src={img} alt={name} />
            <div className={`${styles.favourite} ${isFavourited ? styles.favourited : ""}`} onClick={toggleFavourite}>
                <HeartStraight size={22} weight={isFavourited ? "fill" : "regular"} color={isFavourited ? "red" : "black"} />
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>
                    <h5>{name}</h5>
                    <p style={{ color: "#a3a3a3" }}>{family}</p>
                    <p>${price}</p>
                </div>
                <div className={styles.bag} onClick={toggleCart}>
                    <BagSimple size={26} weight={quantity ? "fill" : "regular"} />
                </div>
            </div>
        </div>
    );
}

export default Card;
