import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { BagSimple, ArrowLeft, HeartStraight } from "@phosphor-icons/react";
import ShopContext from '../../context';
import styles from './FruitPage.module.css';

function FruitPage() {
    const { name } = useParams(); // get the name from the URL
    const navigate = useNavigate();
    const { fruits, setFruits } = useContext(ShopContext);
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name);
    const [bagQuantity, setBagQuantity] = useState(fruit.quantity ? fruit.quantity : 1);

    if (!fruit) {
        return <h1>404 - Fruit not found</h1>
    }

    const toggleFavourite = () => {
        const updatedFruits = [...fruits];
        updatedFruits[fruit.id].isFavourited = !updatedFruits[fruit.id].isFavourited;
        setFruits(updatedFruits);
    }

    const handleDecrement = () => {
        if (bagQuantity > 1) {
            setBagQuantity(bagQuantity - 1);
        }
    }

    const buyNow = () => {
        const updatedFruits = [...fruits];
        updatedFruits[fruit.id].quantity = bagQuantity;
        setFruits(updatedFruits);
        navigate("/bag");
    }

    const toggleBag = () => {
        const updatedFruits = [...fruits];
        updatedFruits[fruit.id].quantity = updatedFruits[fruit.id].quantity === 0 ? bagQuantity : 0;
        setFruits(updatedFruits);
    }

    return (
        <div className={styles.fruitPage}>
            <div className={styles.top} onClick={() => navigate(-1)}>
                <ArrowLeft size={30} />
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <div className={`${styles.favourite} ${fruit.isFavourited ? styles.favourited : ""}`} onClick={toggleFavourite}>
                            <HeartStraight size={28} weight={fruit.isFavourited ? "fill" : "regular"} color={fruit.isFavourited ? "red" : "black"} />
                        </div>
                        <img src={fruit.img} alt="" />
                    </div>
                    <div className={styles.category}>
                        {fruit.category.map((category, index) => (
                            <p key={index}>{category}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>{fruit.name}</h1>
                    <p className={styles.family}>{fruit.family} Family</p>
                    <div className={styles.stock}>
                        <img src="" alt="" />
                        <p>In Stock</p>
                    </div>
                    <h3>${fruit.price}</h3>
                    <div className={styles.quantity}>
                        <button onClick={handleDecrement}>-</button>
                        <p>{bagQuantity}</p>
                        <button onClick={() => setBagQuantity(bagQuantity + 1)}>+</button>
                    </div>
                    <p>{fruit.description}</p>
                    <div className={styles.buttons}>
                        <button className={styles.buyNowButton} onClick={() => buyNow()}>Buy Now</button>
                        <button className={styles.bagButton} onClick={() => toggleBag()}><BagSimple size={25}/>{!fruit.quantity ? "Add to Bag" : "Remove from Bag"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FruitPage