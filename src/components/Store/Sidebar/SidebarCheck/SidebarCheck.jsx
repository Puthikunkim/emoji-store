import { useState, useContext } from "react";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import ShopContext from "../../../../context";
import styles from "./SidebarCheck.module.css";

function SidebarCheck({ category }) {
    const [isOpen, setIsOpen] = useState(true)
    const { filters, setFilters } = useContext(ShopContext)

    const handleFilterClick = (index) => {
        const updatedCategory = [...filters[category]]
        updatedCategory[index].isChecked = !updatedCategory[index].isChecked
        setFilters({...filters, [category]: updatedCategory})
    }

    const filtersClicked = filters[category].filter((filter) => filter.isChecked).length

    const height = category === "Family" ? "380px" : "220px"

    return (
        <div className={styles.sidebarCheck}>
            <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <h3>{category} {filtersClicked ? `(${filtersClicked})` : ""}</h3>
                {isOpen ? <CaretDown size={20} /> : <CaretUp size={20} />}
            </div>

            <div className={styles.checkContainer} style={{ height: isOpen ? height : "0px" }}> 
                {filters[category].map((filter, index) => (
                    <div key={index} className={styles.checkBox} onClick={() => handleFilterClick(index)}>
                        <div className={`${styles.tickBox} ${filter.isChecked ? styles.ticked : ""}`}>{filter.isChecked ? <Check size={15} fill="white" weight="bold"/> : ""}</div>
                        <p className={styles.p}>{filter.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SidebarCheck