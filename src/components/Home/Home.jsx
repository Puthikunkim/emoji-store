import heroImage from "../../assets/images/hero.jpg";
import middleImage from "../../assets/images/middle.jpg";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Store/CardContainer/Card/Card";
import ShopContext from "../../context";
import { useContext } from "react";
import { ArrowRight } from "@phosphor-icons/react";

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
            <h2>Best sellers</h2>
            <div className={styles.cardContainer}>
                <Card product={fruits[0]}/>
                <Card product={fruits[1]}/>
                <Card product={fruits[2]}/>
                <Card product={fruits[3]}/>
            </div>
        </div>
        <div className={styles.middleHero}>
            <img src={middleImage} alt="Middle Hero" />

            <div className={styles.middleHeroContent}>
                <h3>Emojis. Exclusive Deal</h3>
                <p>
                Discover the ultimate collection of emojis at Eunoia Exclusives. Express yourself with vibrant designs, where creativity meets fun. Immerse yourself in a world of endless possibilities. Explore now!
                </p>
                <div className={styles.visitShop} onClick={() => navigate("/store")}>
                    <p>Visit Shop</p>
                    <ArrowRight size={20} className={styles.arrowRight}/>
                </div>
            </div>
        </div>
        <div className={styles.middle}>
            <h2>You May Also Like</h2>
            <div className={styles.cardContainer}>
                <Card product={fruits[10]}/>
                <Card product={fruits[11]}/>
                <Card product={fruits[12]}/>
                <Card product={fruits[13]}/>
            </div>
        </div>
        </div>
    );
}

export default Home;
