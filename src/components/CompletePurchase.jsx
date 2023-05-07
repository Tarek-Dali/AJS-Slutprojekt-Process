export default function CompletePurchase({ functions }) {

    return (
        <>
            <button onClick={() => { functions.putFireBase(); functions.productPageBoolean(); functions.emptyCart(); functions.setLoadingFinished() }} className="pageButton">Complete purchase</button>
        </>
    );
}