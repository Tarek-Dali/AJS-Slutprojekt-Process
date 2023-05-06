import { useEffect, useState } from 'react';
import Product from './Product';
import ToShoppingCart from './ToShoppingCart';

export default function Products({ check, info, updateInfoStock }) {

    // console.log(typeof check);


    return (
        <>

            <div>
                <div className='productsContainer'>
                    <Product product={info[0]} updateInfoStock={updateInfoStock} place= {0}/>
                    <Product product={info[1]} updateInfoStock={updateInfoStock} place= {1}/>
                    <Product product={info[2]} updateInfoStock={updateInfoStock} place= {2}/>
                    <Product product={info[3]} updateInfoStock={updateInfoStock} place= {3}/>
                    <Product product={info[4]} updateInfoStock={updateInfoStock} place= {4}/>
                </div>
                <ToShoppingCart check={check} />
            </div>
        </>
    );
}