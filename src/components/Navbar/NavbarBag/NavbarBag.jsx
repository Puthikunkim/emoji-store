import { useState } from "react";
import { BagSimple } from "@phosphor-icons/react";
import styles from "./NavbarBag.module.css";

function NavbarBag() {
  const [isClicked, setIsClicked] = useState(false);
  const count = 3; // Change this to the actual cart count

  const toggleBag = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.bagContainer} onClick={toggleBag}>
      {/* Bag Icon */}
      <BagSimple size={40} weight={isClicked ? "fill" : "regular"} />

      {/* Counter Number */}
      <span className={styles.bagNumber}>{count}</span>
    </div>
  );
}

export default NavbarBag;
