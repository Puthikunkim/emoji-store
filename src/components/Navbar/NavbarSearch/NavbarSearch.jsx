import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./NavbarSearch.module.css";

function NavbarSearch() {
    const [query, setQuery] = useState("");

    return (
        <div className={styles.searchContainer}>
            <BiSearch className={styles.searchIcon} />
            <input type="text" className={styles.searchInput} placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
    );
}

export default NavbarSearch;