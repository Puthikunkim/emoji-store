import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import ShopContext from '../../context';
import styles from './FruitPage.module.css';

function FruitPage() {
    const { name } = useParams(); // get the name from the URL
    const { fruits } = useContext(ShopContext);
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name);

    if (!fruit) {
        return <h1>404 - Fruit not found</h1>
    }

    return (
        <div className={styles.fruitPage}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
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
                <p>{fruit.family}</p>
                <h3>${fruit.price}</h3>
                <p>{fruit.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default FruitPage