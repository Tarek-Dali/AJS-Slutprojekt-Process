export default function EmptyCartButton({ emptyCart, check}) {

    return (
        <>
            <button onClick={() => {check(); emptyCart();}} className="pageButton">To products</button>
        </>
    );
}