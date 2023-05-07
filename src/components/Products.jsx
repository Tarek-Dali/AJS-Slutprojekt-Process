import Product from './Product';

export default function Products({ check, info, updateInfoStock }) {

    return (
        <>
            <div>
                <div className="productsContainer">
                    {info.map((product, index) => (
                        <Product key={index} product={product} updateInfoStock={updateInfoStock} place={index} />
                    ))}
                </div>
                <button onClick={check} className="pageButton">
                    To shopping cart
                </button>
            </div>
        </>
    );
}