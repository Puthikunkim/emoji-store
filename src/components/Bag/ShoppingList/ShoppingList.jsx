import styles from "./ShoppingList.module.css";
import { Trash } from "@phosphor-icons/react";
import { useState, useContext } from 'react';
import ShopContext from '../../../context';

function ShoppingList() {
    const { fruits, setFruits } = useContext(ShopContext);
    const fruitsToDisplay = fruits.filter((fruit) => (fruit.quantity > 0));
    const handleDecrement = (fruit) => {
        const updatedFruits = [...fruits];
        updatedFruits[fruit.id].quantity = updatedFruits[fruit.id].quantity - 1;
        setFruits(updatedFruits);
    }
    const handleIncrement = (fruit) => {
        const updatedFruits = [...fruits];
        updatedFruits[fruit.id].quantity = updatedFruits[fruit.id].quantity + 1;
        setFruits(updatedFruits);
    }
    const handleTrash = (fruit) => {
        const updatedFruits = [...fruits];
        updatedFruits[fruit.id].quantity = 0;
        setFruits(updatedFruits);
    }
    return (
        <div className={styles.shoppingList}>
            <h3>Shopping Bag</h3>
            {fruitsToDisplay.map((fruit, index) => (
                <div className={styles.fruitCard} key={index}>
                    <div className={styles.imgContainer}>
                        <img src={fruit.img} alt={fruit.name} />
                    </div>
                    <div className={styles.stockInfo}>
                        <div className={styles.stockInfoLeft}>
                            <div className={styles.fruitInfo}>
                                <h4>{fruit.name}</h4>
                                <p className={styles.family}>{fruit.family} Family</p>
                                <p className={styles.stockText}>In Stock</p>
                                <p className={styles.quantityText}>Qty: {fruit.quantity}</p>
                            </div>
                            <div className={styles.quantity}>
                                <button onClick={() => handleDecrement(fruit)}>-</button>
                                <p>{fruit.quantity}</p>
                                <button onClick={() => handleIncrement(fruit)}>+</button>
                            </div>
                        </div>
                        <div className={styles.stockInfoRight}>
                            <div className={styles.trash} onClick={() => handleTrash(fruit)}>
                                <Trash size={15} color={"red"} />
                            </div>
                            <h4>${fruit.quantity * fruit.price}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShoppingList;
