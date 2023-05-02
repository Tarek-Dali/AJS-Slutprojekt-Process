import { useEffect, useState } from 'react';
import Images from './Images';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getFireBase() {
            const url = 'https://slutproject-produkt-advjs-default-rtdb.europe-west1.firebasedatabase.app/products.json';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }

        getFireBase();
    }, []);

    return (
        <div>
            <Images imgSrc={products[0].imgSrc} />
        </div>
    );

}