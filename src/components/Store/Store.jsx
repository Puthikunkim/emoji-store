import Sidebar from './Sidebar/Sidebar'
import CardContainer from './CardContainer/CardContainer'
import styles from "./Store.module.css";

function Store() {
    return (
        <div className={styles.store}>
            <Sidebar />
            <CardContainer />
        </div>
    )
}

export default Store