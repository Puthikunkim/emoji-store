import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShopContext from "../../../context";
import { BiSearch } from "react-icons/bi";
import styles from "./NavbarSearch.module.css";

function NavbarSearch() {
  const { query, setQuery } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/store");
    }
  };

  return (
    <div className={styles.searchContainer}>
      <BiSearch className={styles.searchIcon} />
      <input type="text" className={styles.searchInput} placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
    </div>
  );
}

export default NavbarSearch;
