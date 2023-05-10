import { Link } from 'react-router-dom';

export default function Navbar({ navbarTotalCount }) {

    return (
        <nav className="navbar">

            <Link to="/">Products</Link>
            <Link to="/shoppingcart">Shopping cart <span className='navbarCounter'>{navbarTotalCount}</span></Link>

        </nav>
    );
}