import { useState, useContext } from "react";
import { HeartStraight } from "@phosphor-icons/react";
import ShopContext from "../../../context";
import styles from "./NavbarFavourite.module.css";

function NavbarFavourite() {
  const [isFavorited, setIsFavorited] = useState(false);
  const { fruits } = useContext(ShopContext);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const favouriteCount = fruits.filter((fruit) => fruit.isFavourited).length;

  return (
    <div className={styles.heartContainer} onClick={toggleFavorite}>
      {/* Heart Icon */}
      <HeartStraight
        size={40}
        weight={isFavorited ? "fill" : "regular"}
      />

      {/* Counter Number */}
      <span className={styles.heartNumber}>{favouriteCount}</span>
    </div>
  );
}

export default NavbarFavourite;
