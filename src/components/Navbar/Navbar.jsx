import NavbarLink from "./NavbarLink/NavbarLink";
import styles from "./Navbar.module.css"
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarFavourite from "./NavbarFavourite/NavbarFavourite";
import NavbarBag from "./NavbarBag/NavbarBag";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                <NavbarLink />
            </div>
            <div className={styles.navRight}>
                <NavbarSearch />
                <NavbarFavourite />
                <NavbarBag />
            </div>
        </nav>
    )
}

export default Navbar