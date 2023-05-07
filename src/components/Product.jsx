export default function Product({ product, updateInfoStock, place }) {

    return (
        <>
            <div>
                <img src={product.imgSrc} alt="product" className='img-size' />
                <h3>{product.name}</h3>
                <h3>Price: {product.price} kr</h3>
                <h3>Stock: {product.stock}</h3>
                <button onClick={() => updateInfoStock(product, place)}>Add to cart</button>
            </div>
        </>
    );

}