import SidebarColor from "./SidebarColor/SidebarColor";
import SidebarCheck from "./SidebarCheck/SidebarCheck";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarColor />
      <SidebarCheck category="families"/>
      <SidebarCheck category="vitamins"/>
    </div>
  );
}

export default Sidebar;