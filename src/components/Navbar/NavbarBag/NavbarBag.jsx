import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ShopContext from "../../../context";
import { BagSimple } from "@phosphor-icons/react";
import styles from "./NavbarBag.module.css";

function NavbarBag() {
    const { fruits } = useContext(ShopContext);
    const location = useLocation();

    const bagCount = fruits.filter((fruit) => fruit.quantity).length;

    return (
        <Link to="/bag">
            <div className={styles.bagContainer}>
            {/* Bag Icon */}
            <BagSimple size={40} weight={location.pathname === "/bag" ? "fill" : "regular"} />

            {/* Counter Number */}
            <span className={styles.bagNumber}>{bagCount}</span>
            </div>
        </Link>
    );
}

export default NavbarBag;
