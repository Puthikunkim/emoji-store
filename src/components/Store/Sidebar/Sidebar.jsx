import SidebarColor from "./SidebarColor/SidebarColor";
import SidebarCheck from "./SidebarCheck/SidebarCheck";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarColor />
      <SidebarCheck category="Family"/>
      <SidebarCheck category="Vitamins"/>
    </div>
  );
}

export default Sidebar;