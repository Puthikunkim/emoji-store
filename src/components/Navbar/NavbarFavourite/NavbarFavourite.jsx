import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./NavbarFavourite.module.css";

function NavbarFavourite() {
  const [isFavorited, setIsFavorited] = useState(false);
  const count = 2;

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <div className={styles.heartContainer} onClick={toggleFavorite}>
        <FaHeart style={{ color: isFavorited ? "black" : "transparent", stroke: "black", strokeWidth: "40px" }} />
        <span className={styles.heartNumber}>{count}</span>
      </div>
    </>
  );
}

export default NavbarFavourite;