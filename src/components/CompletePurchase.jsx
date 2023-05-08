import { Link } from 'react-router-dom';

export default function CompletePurchase({ functions }) {

    return (
        <>
            <Link to="/">
                <button onClick={() => { functions.putFireBase(); functions.emptyCart(); functions.setLoadingFinished() }} >Complete purchase</button>
            </Link>
        </>
    );
}