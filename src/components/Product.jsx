import { useEffect, useState } from 'react';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function getFireBase() {
            setStatus('loading');
            const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
            const response = await fetch(url);
            const data = await response.json();

            if (Array.isArray(data)) {
                console.log(data);
                setProducts(data);

                setStatus('success');
            }
            else{
                setStatus('failed');
            }

        }

        getFireBase();
    }, []);

    return (
        <>
        {status === 'success'}
        </>
    );

}