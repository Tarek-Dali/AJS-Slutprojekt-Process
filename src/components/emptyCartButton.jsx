export default function EmptyCartButton({ functions }) {

    return (
        <>
            <button onClick={() => { functions.productPageBoolean(); functions.emptyCart(); functions.setLoadingFinished(false); }} className="pageButton">Cancel</button>
        </>
    );
}