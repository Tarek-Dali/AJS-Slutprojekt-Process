import '../css/App.css'
import Products from './Products'
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';

export default function App() {
    let [checker, setChecker] = useState(true);
    let [info, setInfo] = useState();
    let [product1, setProduct1] = useState();
    let [product2, setProduct2] = useState();
    let [product3, setProduct3] = useState();
    let [product4, setProduct4] = useState();
    let [product5, setProduct5] = useState();

    useEffect(() => {
        async function getFireBase() {
            const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
            const response = await fetch(url);
            const data = await response.json();
            setProduct1(data[0]);
            setProduct2(data[1]);
            setProduct3(data[2]);
            setProduct4(data[3]);
            setProduct5(data[4]);
            setInfo(data);
        }

        getFireBase();
    }, []);

    function productAdd(object) {

    }

    function check() {
        setChecker(false);
    }

    return (
        <>
            {info ?
                <>
                    {checker ?
                        <Products check={check} product1={product1} product2={product2} product3={product3} product4={product4} product5={product5} />
                        :
                        <ShoppingCart />
                    }
                </>
                :
                <h1>Loading product information</h1>
            }
        </>
    );
}