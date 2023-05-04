import { useEffect, useState } from 'react';

export default function Product(object) {
    // const [product, setProducts] = useState();

    console.log(object.product.imgSrc);

    return (
        <>
            <div className='productsContainer'>
                <img src={object.product.imgSrc} alt="product" className='img-size' />
                <h3>{object.product.name}</h3>
                <h3>Price: {object.product.price}</h3>
                <h3>Stock: {object.product.stock}</h3>

            </div>
        </>
    );

}