import Product from './Product';
import { Link } from 'react-router-dom';

export default function Products({ data, updateDataStock }) {

    return (
        <>
            <h1 id='title'>Swedonia Express</h1>
            <div>
                <div className="productsContainer">
                    {data.map((product, index) => (
                        <Product key={index} product={product} updateDataStock={updateDataStock} place={index} />
                    ))}
                </div>
                <Link to="/shoppingcart">
                    <button className="pageButton"> To shopping cart </button>
                </Link>
            </div>
        </>
    );
}