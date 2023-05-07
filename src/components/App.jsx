import '../css/App.css'
import Products from './Products'
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';

let functions;


const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';

export default function App() {
    const [productPage, setProductPage] = useState(true);
    const [info, setInfo] = useState();
    const [amount, setAmount] = useState();
    const [loadingFinished, setLoadingFinished] = useState(false);

    useEffect(() => {
        async function getFireBase() {
            const response = await fetch(url);
            const data = await response.json();
            setAmount(Array(data.length).fill(0));
            setInfo(data);
            setLoadingFinished(true);
        }

        getFireBase();
    }, [loadingFinished]);


    async function putFireBase() {
        alert('Purchase complete');

        const options = {
            method: 'PUT',
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        await fetch(url, options);
    }

    function updateInfoStock(object, place) {
        if (object.stock > 0) {
            object.stock -= 1;
            
            const updatedAmount = [...amount];
            updatedAmount[place] += 1;
            setAmount(updatedAmount);
        }
    }

    function emptyCart() {
        let arrayLength = info.length;
        setAmount(Array(arrayLength).fill(0));
    }

    function productPageBoolean() {
        setProductPage(boolean => !boolean);
    }

    functions = {
        putFireBase,
        setLoadingFinished,
        emptyCart,
        productPageBoolean
    }


    return (
        <>
            {loadingFinished ?
                <>
                    {productPage ?
                        <Products productPageBoolean={productPageBoolean} info={info} updateInfoStock={updateInfoStock} />
                        :
                        <ShoppingCart functions={functions} info={info} amount={amount} />
                    }
                </>
                :
                <h1>Loading product information</h1>
            }
        </>
    );
}