import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav-left">
                <Link to="/">
                    <h1>fruits.</h1>
                </Link>
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/store">
                    <h2>Store</h2>
                </Link>
            </div>
            <div className="nav-right">

            </div>
        </nav>
    )
}

export default Navbar