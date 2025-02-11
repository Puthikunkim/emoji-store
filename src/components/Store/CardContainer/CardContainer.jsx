import { useState, useContext } from "react";
import ShopContext from "../../../context";
import styles from "./CardContainer.module.css";
import Card from "./Card/Card";

function CardContainer() {
  const { fruits, favouritePage } = useContext(ShopContext);

  const fruitsToDisplay = favouritePage ? fruits.filter((fruit) => fruit.isFavourited) : fruits;
  const fruitsToDisplayCount = fruitsToDisplay.length;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <h3>Items ({fruitsToDisplayCount})</h3>
        <h3 className={`${styles.favourites} ${favouritePage ? styles.active : ""}`}>— Favourites</h3>
      </div>
      <div className={styles.body}>
        {fruitsToDisplayCount === 0 && <p className={styles.empty}>No fruits match the current filters.</p>}
        {fruitsToDisplay.map((fruit, index) => (
          <Card key={index} product={fruit} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;