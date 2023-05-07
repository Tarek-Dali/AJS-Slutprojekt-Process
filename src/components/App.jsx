import '../css/App.css'
import Products from './Products'
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

let functions;


const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';

export default function App() {
    const [data, setData] = useState();
    const [amount, setAmount] = useState();
    const [loadingFinished, setLoadingFinished] = useState(false);

    useEffect(() => {
        async function getFireBase() {
            const response = await fetch(url);
            const data = await response.json();
            setAmount(Array(data.length).fill(0));
            setData(data);
            setLoadingFinished(true);
        }

        getFireBase();
    }, [loadingFinished]);


    async function putFireBase() {
        alert('Purchase complete');

        const options = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        await fetch(url, options);
    }

    function updateDataStock(object, place) {
        if (object.stock > 0) {
            object.stock -= 1;

            const updatedAmount = [...amount];
            updatedAmount[place] += 1;
            setAmount(updatedAmount);
        }
    }

    function emptyCart() {
        let arrayLength = data.length;
        setAmount(Array(arrayLength).fill(0));
    }

    functions = {
        putFireBase,
        setLoadingFinished,
        emptyCart
    }


    return (
        <>
            {loadingFinished ?
                <>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Products data={data} updateDataStock={updateDataStock} />
                            </Route>
                            <Route path="/shoppingcart">
                                <ShoppingCart functions={functions} data={data} amount={amount} />
                            </Route>
                        </Switch>
                    </Router>
                </>
                :
                <h1>Loading product information</h1>
            }
        </>
    );
}