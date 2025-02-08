import { useState } from "react";
import { HeartStraight } from "@phosphor-icons/react";
import styles from "./NavbarFavourite.module.css";

function NavbarFavourite() {
  const [isFavorited, setIsFavorited] = useState(false);
  const count = 2;

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={styles.heartContainer} onClick={toggleFavorite}>
      {/* Heart Icon */}
      <HeartStraight
        size={40}
        weight={isFavorited ? "fill" : "regular"}
      />

      {/* Counter Number */}
      <span className={styles.heartNumber}>{count}</span>
    </div>
  );
}

export default NavbarFavourite;
