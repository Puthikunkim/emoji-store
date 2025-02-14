import { useState } from "react";
import SidebarColor from "./SidebarColor/SidebarColor";
import SidebarCheck from "./SidebarCheck/SidebarCheck";
import { List, X } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Burger Icon */}
      <div className={styles.burgerIcon} onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <List size={24} />}
      </div>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <SidebarColor />
        <SidebarCheck category="Family" />
        <SidebarCheck category="Vitamins" />
      </div>
    </>
  );
}

export default Sidebar;
