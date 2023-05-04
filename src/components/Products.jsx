import { useEffect, useState } from 'react';
import Product from './Product';

export default function Products({check}) {
    const [stock, setStock] = useState(0);
    const [products, setProducts] = useState();

    console.log(typeof check);

    useEffect(() => {
        async function getFireBase() {
            const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }

        getFireBase();
    }, []);

    function stockSubtract() {
        setStock(stock - 1);
    }

    return (
        <>
            {products ?

                <div className='productsContainer'>
                    <Product product={products[0]} check={check} />
                    <Product product={products[1]} check={check} />
                    <Product product={products[2]} check={check} />
                    <Product product={products[3]} check={check} />
                    <Product product={products[4]} check={check} />
                </div>

                :
                <p>Loading...</p>
            }
        </>
    );
}