import { useContext } from "react";
import FilterFunctionality from "./FilterFunctionality/FilterFunctionality";
import ShopContext from "../../../context";
import styles from "./CardContainer.module.css";
import Card from "./Card/Card";
import FilterCheck from "./FilterCheck/FilterCheck";

function CardContainer() {
  const { favouritePage, setFilters, setQuery, filters } = useContext(ShopContext);

  const { finalFilteredFruits, activeFamilyFilters, activeColorFilters, activeVitaminFilters, cleanedQuery } = FilterFunctionality();
  const fruitsToDisplayCount = finalFilteredFruits.length;

  const removeFamilyFilter = (family) => {
    const updatedFilters = { ...filters };
    updatedFilters.Family.find((filter) => filter.name === family).isChecked = false;
    setFilters(updatedFilters);
  }

  const removeColorFilter = (color) => {
    const updatedFilters = { ...filters };
    updatedFilters.colors.find((filter) => filter.name === color).isChecked = false;
    setFilters(updatedFilters);
  }

  const removeVitaminFilter = (vitamin) => {
    const updatedFilters = { ...filters };
    updatedFilters.Vitamins.find((filter) => filter.name === vitamin).isChecked = false;
    setFilters(updatedFilters);
  }

  const removeQuery = () => {
    setQuery("");
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <h3>Items ({fruitsToDisplayCount})</h3>
        <h3 className={`${styles.favourites} ${favouritePage ? styles.active : ""}`}>— Favourites</h3>
      </div>
      <div className={styles.filters}>
        <FilterCheck
          activeFamilyFilters={activeFamilyFilters}
          activeColorFilters={activeColorFilters}
          activeVitaminFilters={activeVitaminFilters}
          cleanedQuery={cleanedQuery}
          removeFamilyFilter={removeFamilyFilter}
          removeColorFilter={removeColorFilter}
          removeVitaminFilter={removeVitaminFilter}
          removeQuery={removeQuery}
        />
      </div>
      <div className={styles.body}>
        {fruitsToDisplayCount === 0 && <p className={styles.empty}>No fruits match the current filters.</p>}
        {finalFilteredFruits.map((fruit, index) => (
          <Card key={index} product={fruit} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;