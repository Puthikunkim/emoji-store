import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <h1>Welcome to Emojis.</h1>
            <p>Discover our vibrant collection of emojis, packed with expression and personality. Delivered straight from our creative vault to your screen!</p>
        </div>
    )
}

export default Home