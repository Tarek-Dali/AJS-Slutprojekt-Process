import { useEffect, useState } from 'react';
import Product from './Product';
import ToShoppingCart from './ToShoppingCart';

export default function Products({ check, info, futureData }) {

    // console.log(typeof check);


    return (
        <>

            <div>
                <div className='productsContainer'>
                    <Product product={info[0]} futureData={futureData} place= {0}/>
                    <Product product={info[1]} futureData={futureData} place= {1}/>
                    <Product product={info[2]} futureData={futureData} place= {2}/>
                    <Product product={info[3]} futureData={futureData} place= {3}/>
                    <Product product={info[4]} futureData={futureData} place= {4}/>
                </div>
                <ToShoppingCart check={check} />
            </div>
        </>
    );
}