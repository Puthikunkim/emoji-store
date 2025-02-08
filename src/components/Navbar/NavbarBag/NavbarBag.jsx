import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import styles from "./NavbarBag.module.css";

function NavbarBag() {
  const [isOpen, setIsOpen] = useState(false);
  const count = 2;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.bagContainer} onClick={toggleOpen}>
      <BsFillBagFill 
        className={styles.bagIcon} 
        style={{ fill: isOpen ? "black" : "transparent", stroke: "black" }} 
      />
      <span className={styles.bagNumber}>{count}</span>
    </div>
  );
}

export default NavbarBag;
