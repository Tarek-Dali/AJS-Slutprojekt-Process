import { Link } from 'react-router-dom';

export default function EmptyCartButton({ functions }) {

    return (
        <>
            <Link to="/">
                <button onClick={() => { functions.emptyCart(); functions.setLoadingFinished(false); }} >Empty cart</button>
            </Link>

        </>
    );
}