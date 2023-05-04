import { useEffect, useState } from 'react';
import Product from './Product';

export default function Products() {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     async function getFireBase() {
    //         const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data);
    //         setProducts(data);
    //     }

    //     getFireBase();
    // }, []);

    return (
        <>
            <Product/>
        </>
    );

}