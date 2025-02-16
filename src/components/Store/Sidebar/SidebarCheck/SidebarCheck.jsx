import { useState, useContext } from "react";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import ShopContext from "../../../../context";
import styles from "./SidebarCheck.module.css";

function SidebarCheck({ category }) {
  const [isOpen, setIsOpen] = useState(true);
  const { filters, setFilters } = useContext(ShopContext);

  const handleFilterClick = (index) => {
    let updatedCategory;
    if (category === "Family") { // Toggle the clicked filter and set all others to false.
      updatedCategory = filters[category].map((filter, i) => {
        if (i === index) {
          return { ...filter, isChecked: !filter.isChecked };
        }
        return { ...filter, isChecked: false };
      });
    } else {
      updatedCategory = filters[category].map((filter, i) => {
        if (i === index) {
          return { ...filter, isChecked: !filter.isChecked };
        }
        return filter;
      });
    }
    setFilters({ ...filters, [category]: updatedCategory });
  };

  const filtersClicked = filters[category].filter((filter) => filter.isChecked).length;
  const height = category === "Family" ? "390px" : "220px";

  return (
    <div className={styles.sidebarCheck}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3>{category} {filtersClicked ? `(${filtersClicked})` : ""}</h3>
        {isOpen ? <CaretDown size={20} /> : <CaretUp size={20} />}
      </div>

      <div className={styles.checkContainer} style={{ height: isOpen ? height : "0px" }}>
        {filters[category].map((filter, index) => (
          <div key={index} className={styles.checkBox} onClick={() => handleFilterClick(index)}>
            <div className={`${styles.tickBox} ${filter.isChecked ? styles.ticked : ""}`}>
              {filter.isChecked ? (<Check size={15} fill="white" weight="bold" />) : ("")}
            </div>
            <p className={styles.p}>{filter.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarCheck;
