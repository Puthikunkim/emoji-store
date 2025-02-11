import { useState, useContext } from "react";
import ShopContext from "../../../context";
import { BagSimple } from "@phosphor-icons/react";
import styles from "./NavbarBag.module.css";

function NavbarBag() {
  const [isClicked, setIsClicked] = useState(false);
  const { fruits } = useContext(ShopContext);

  const toggleBag = () => {
    setIsClicked(!isClicked);
  };

  const bagCount = fruits.filter((fruit) => fruit.quantity).length;

  return (
    <div className={styles.bagContainer} onClick={toggleBag}>
      {/* Bag Icon */}
      <BagSimple size={40} weight={isClicked ? "fill" : "regular"} />

      {/* Counter Number */}
      <span className={styles.bagNumber}>{bagCount}</span>
    </div>
  );
}

export default NavbarBag;
