import '../css/App.css'
import Products from './Products'
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';

export default function App() {
    let [checker, setChecker] = useState(true);

    function check() {
        setChecker(false);
    }

    return (
        <>
            {checker ?


                <Products check={check} />
                :
                <ShoppingCart />
            }
        </>
    );
}