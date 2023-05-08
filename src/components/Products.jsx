import Product from './Product';
import { Link } from 'react-router-dom';

export default function Products({ data, updateDataStock, amount }) {

    // Adds elements with every added product's info with product price per singular piece
    const productsAddedTextEl = [];

    for (let i = 0; i < data.length; i++) {
        if (amount[i] != 0) {
            productsAddedTextEl.push(<h2 key={i}>{amount[i]} {data[i].name} {data[i].price} kr/st</h2>);
        }
    }

    // Displays products for sale and to the side products added
    return (
        <>
            <h1 id='title'>Swedonia Express</h1>
            <div className='cartDisplay'>
                <h2 id='cartDisplayTitle'>Cart</h2>
                {productsAddedTextEl}
            </div>
            <div>
                <div className="productsContainer">
                    {data.map((product, index) => (
                        <Product key={index} product={product} updateDataStock={updateDataStock} place={index} />
                    ))}
                </div>
            </div>
        </>
    );
}