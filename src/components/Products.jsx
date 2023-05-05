import { useEffect, useState } from 'react';
import Product from './Product';
import ToShoppingCart from './ToShoppingCart';

export default function Products({ check, product1, product2, product3, product4, product5 }) {

    console.log(typeof check);


    return (
        <>

            <div>
                <div className='productsContainer'>
                    <Product product={product1} />
                    <Product product={product2} />
                    <Product product={product3} />
                    <Product product={product4} />
                    <Product product={product5} />
                </div>
                <ToShoppingCart check={check} />
            </div>
        </>
    );
}