import { useEffect, useState } from 'react';
import Product from './Product';

export default function Products() {
    const [stock, setStock] = useState(0);
    const [products, setProducts] = useState();

    useEffect(() => {
        async function getFireBase() {
            const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }

        getFireBase();
    }, []);
    
    function stockSubtract(){
        setStock(stock - 1);
    }

    return (
        <>
            {products ?
                <>
                    <div>
                        <Product product={products[0]} />
                        <Product product={products[1]} />
                        <Product product={products[2]} />
                        <Product product={products[3]} />
                        <Product product={products[4]} />
                    </div>
                </>
                :
                <p>Loading...</p>
            }
        </>
    );
}



