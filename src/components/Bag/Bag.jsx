import { useNavigate } from "react-router-dom";
import styles from "./Bag.module.css";
import Summary from "./Summary/Summary";
import ShoppingList from "./ShoppingList/ShoppingList";
import { ArrowLeft } from "@phosphor-icons/react";

function Bag() {
    const navigate = useNavigate();
    return (
        <div className={styles.bag}>
            <div className={styles.top} onClick={() => navigate(-1)}>
                <ArrowLeft size={30} />
            </div>
            <div className={styles.bottom}>
                <ShoppingList />
                <Summary />
            </div>
        </div>
    )
}

export default Bag