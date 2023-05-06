import '../css/App.css'
import Products from './Products'
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';

const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';

export default function App() {
    let [checker, setChecker] = useState(true);
    let [info, setInfo] = useState();
    let [amount, setAmount] = useState([0, 0, 0, 0, 0]);
    let [loadingFinished, setLoadingFinished] = useState(false);

    useEffect(() => {
        async function getFireBase() {
            
            if(info && loadingFinished == false){
                alert('Purchase complete');
            }
            const response = await fetch(url);
            const data = await response.json();
            setInfo(data);
            setLoadingFinished(true);
        }

        getFireBase();
    }, [loadingFinished]);

    async function putFireBase() {
    
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

            info[place] = object;
            setInfo((prev) => ([ ...prev ]));

            amount[place] += 1;
            setAmount((prev) => ([ ...prev ]));
        }
    }

    function emptyCart(){
        
        setAmount((prev) => [ ...prev = [0, 0, 0, 0, 0] ]);
    }

    function check() {
        setChecker((prev) => (!prev));
    }

    return (
        <>
            {loadingFinished ?
                <>
                    {checker ?
                        <Products check={check} info={info} updateInfoStock={updateInfoStock} />
                        :
                        <ShoppingCart putFireBase={putFireBase} setLoadingFinished={setLoadingFinished} emptyCart={emptyCart} check={check} info={info} amount={amount}/>
                    }
                </>
                :
                <h1>Loading product information</h1>
            }
        </>
    );
}