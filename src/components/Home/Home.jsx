import heroImage from "../../assets/images/hero.jpg";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Store/CardContainer/Card/Card";
import ShopContext from "../../context";
import { useContext } from "react";

function Home() {
    const { fruits } = useContext(ShopContext);
    const navigate = useNavigate();
    return (
        <div className={styles.home}>
        <div className={styles.hero}>
            <img src={heroImage} alt="Hero" />
            <div className={styles.overlay}>
            <h1>Where emojis meet the real world</h1>
            <button onClick={() => navigate("/store")}>Shop Now</button>
            </div>
        </div>
        <div className={styles.middle}>
            <h2>Best seller</h2>
            <div className={styles.cardContainer}>
                <Card product={fruits[0]}/>
                <Card product={fruits[1]}/>
                <Card product={fruits[2]}/>
                <Card product={fruits[3]}/>
            </div>
        </div>
        </div>
    );
}

export default Home;
