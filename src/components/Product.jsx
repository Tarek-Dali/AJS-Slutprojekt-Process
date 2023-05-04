import { useEffect, useState } from 'react';

export default function Product({product}) {
    // const [product, setProducts] = useState();
    
    console.log(product);
    

    return (
        <>
            <div>
                <img src={product.imgSrc} alt="product" className='img-size' />
                <h3>{product.name}</h3>
                <h3>Price: {product.price}</h3>
                <h3>Stock: {product.stock}</h3>
                <button>Add to cart</button>
            </div>
        </>
    );

}