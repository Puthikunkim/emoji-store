import { useState, useContext } from "react";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import ShopContext from "../../../../context";
import styles from "./SidebarColor.module.css";

function SidebarColor() {
    const [isOpen, setIsOpen] = useState(true);

    const { filters, setFilters } = useContext(ShopContext);

    const handleColorClick = (index) => {
        const updatedColors = [...filters.colors];
        updatedColors[index].isChecked = !filters.colors[index].isChecked;
        setFilters({ ...filters, colors: updatedColors });
    }

    const checkedColors = filters.colors.filter((color) => color.isChecked).length;

    return (
        <div className={styles.sidebarColor}>
            
            <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <h3>Color ({checkedColors ? `${checkedColors}` : ""})</h3>
                <div>
                    {isOpen ? <CaretDown size={20} /> : <CaretUp size={20} />}
                </div>
            </div>

            <div className={`${styles.colorContainer}  ${isOpen ? styles.open : styles.closed}`}>
                {filters.colors.map((color, index) => (
                    <div key={index} className={`${styles.colorBox} ${color.isChecked ? styles.checked : ""}`} onClick={() => handleColorClick(index)}>
                        <div className={`${styles.colorIcon} ${styles[color.name]}`}>
                            {color.isChecked ? <Check size={15} fill="white" weight="bold"/> : ""}
                        </div>
                        <p>{color.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default SidebarColor;