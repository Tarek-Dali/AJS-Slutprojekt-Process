import { Link } from 'react-router-dom';

export default function EmptyCartButton({ functions }) {

    return (
        <>
            <Link to="/">
                <button onClick={() => { functions.emptyCart(); }} >Empty cart</button>
            </Link>

        </>
    );
}