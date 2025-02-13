import styles from "./Summary.module.css";
import { useContext } from "react";
import ShopContext from '../../../context';

function Summary() {
    const { fruits } = useContext(ShopContext);
    const fruitsInCart = fruits.filter((fruit) => fruit.quantity);
    const subtotal = fruitsInCart.reduce((acc, fruit) => acc + fruit.price * fruit.quantity, 0);
    const shipping = subtotal > 0 ? 6.0 : 0; // Flat $6 shipping if subtotal > 0, otherwise free
    const total = subtotal + shipping;

    const handleCheckout = () => {
        if (total > 0) {
            alert("Checkout successful!");
        } else {
            alert("Please add items to your cart before checking out.");
        }
    }

    return (
        <div className={styles.summary}>
            <h3 className={styles.title}>Order Summary</h3>
            <h2 className={styles.totalPrice}>${total.toFixed(1)}</h2>

            <div className={styles.subtotal}>
                <p>Subtotal ({fruitsInCart.length} items)</p>
                <p>${subtotal.toFixed(1)}</p>
            </div>

            <div className={styles.shipping}>
                <p>Shipping</p>
                <p>${shipping.toFixed(1)}</p>
            </div>

            <hr className={styles.divider} />

            <div className={styles.total}>
                <h4>Total</h4>
                <h4>${total.toFixed(1)}</h4>
            </div>

            <button className={styles.checkout} onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default Summary;
