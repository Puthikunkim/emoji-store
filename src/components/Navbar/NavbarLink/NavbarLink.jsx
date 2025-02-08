import { Link, useLocation } from "react-router-dom";
import styles from './NavbarLink.module.css';

function NavbarLink() {
    const location = useLocation();
    return (
        <>
            <div className={styles.navbarLink}>
                <Link to="/" className={`${styles.link} ${styles.logo}`}>
                    <h1>Emojis.</h1>
                </Link>
                <Link to="/" className={`${styles.link} ${location.pathname === "/" ? styles.active : ""}`}>
                    <h2>Home</h2>
                </Link>
                <Link to="/store" className={`${styles.link} ${location.pathname === "/store" ? styles.active : ""}`}>
                    <h2>Store</h2>
                </Link>
            </div>
        </>
    )
}

export default NavbarLink