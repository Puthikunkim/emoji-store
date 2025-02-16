import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeartStraight } from "@phosphor-icons/react";
import ShopContext from "../../../context";
import styles from "./NavbarFavourite.module.css";

function NavbarFavourite() {
  const { fruits, favouritePage, setFavouritePage } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  // This state will track whether the heart click triggered a navigation.
  const [navigatedFromHeart, setNavigatedFromHeart] = useState(false);

  const toggleFavorite = () => {
    if (location.pathname !== "/store") {
      // Record that the click is triggering a navigation.
      setNavigatedFromHeart(true);
      setFavouritePage(true);
      navigate("/store");
    } else {
      // If already on /store, simply toggle.
      setFavouritePage(!favouritePage);
    }
  };

  useEffect(() => {
    // If we're not on /store, and favouritePage is true,
    // but the navigation was not triggered by the heart, then reset.
    if (location.pathname !== "/store" && favouritePage && !navigatedFromHeart) {
      setFavouritePage(false);
    }
    // When we arrive on /store, reset the flag so future navigations work as expected.
    if (location.pathname === "/store") {
      setNavigatedFromHeart(false);
    }
  }, [location, favouritePage, navigatedFromHeart, setFavouritePage]);

  const favouriteCount = fruits.filter((fruit) => fruit.isFavourited).length;

  return (
    <div className={styles.heartContainer} onClick={toggleFavorite}>
      {/* Heart Icon */}
      <HeartStraight size={40} weight={favouritePage ? "fill" : "regular"} />
      {/* Counter Number */}
      <span className={styles.heartNumber}>{favouriteCount}</span>
    </div>
  );
}

export default NavbarFavourite;
