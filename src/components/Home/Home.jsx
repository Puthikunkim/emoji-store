import heroImage from "../../assets/images/hero.jpg";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
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
        </div>
    );
}

export default Home;
