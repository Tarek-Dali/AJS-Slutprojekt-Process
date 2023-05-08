import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar">

            <Link to="/">Products</Link>
            <Link to="/shoppingcart">Shopping cart</Link>

        </nav>
    );
}