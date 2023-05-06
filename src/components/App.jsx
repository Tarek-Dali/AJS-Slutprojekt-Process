import '../css/App.css'
import Products from './Products'
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';

export default function App() {
    let [checker, setChecker] = useState(true);
    let [info, setInfo] = useState();
    let [amount, setAmount] = useState([0, 0, 0, 0, 0]);
    let [checker2, setTesting] = useState(false);
    let [testing2, setTesting2] = useState([]);

    useEffect(() => {
        async function getFireBase() {
            const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
            const response = await fetch(url);
            const data = await response.json();
            setInfo(data);
            setTesting(true);
        }

        getFireBase();
    }, []);

    function futureData(object, place) {
        
        object.stock-= 1;
        info[place] = object;
        setInfo((prev) => ({...info}));
    }

    function check() {
        setChecker(false);
    }

    return (
        <>
            {checker2?
                <>
                    {checker ?
                        <Products check={check} info={info} futureData={futureData} />
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