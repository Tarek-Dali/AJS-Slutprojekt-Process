import { useEffect, useState } from 'react';

export default function Product() {
    const [products, setProducts] = useState();

    useEffect(() => {
        async function getFireBase() {
            const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }

        getFireBase();
    }, []);

    return (
        <>
            {products ? <img src={products[0].imgSrc} alt="product" className='img-size'/> : <p>Loading...</p>}
        </>
    );

}