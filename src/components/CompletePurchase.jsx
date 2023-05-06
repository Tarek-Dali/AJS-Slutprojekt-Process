export default function CompletePurchase({ putFireBase, setLoadingFinished, emptyCart, check}) {

    return (
        <>
            <button onClick={() => {putFireBase(); check(); emptyCart(); setLoadingFinished(false);}} className="pageButton">Complete purchase</button>
        </>
    );
}