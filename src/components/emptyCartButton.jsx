export default function EmptyCartButton({ setLoadingFinished, emptyCart, check}) {

    return (
        <>
            <button onClick={() => {check(); emptyCart(); setLoadingFinished(false);}} className="pageButton">Cancel</button>
        </>
    );
}