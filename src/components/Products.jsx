import Product from './Product';

export default function Products({ productPageBoolean, info, updateInfoStock }) {

    return (
        <>
        <h1 id='title'>Swedonia Express</h1>
            <div>
                <div className="productsContainer">
                    {info.map((product, index) => (
                        <Product key={index} product={product} updateInfoStock={updateInfoStock} place={index} />
                    ))}
                </div>
                <button onClick={productPageBoolean} className="pageButton"> To shopping cart </button>
            </div>
        </>
    );
}