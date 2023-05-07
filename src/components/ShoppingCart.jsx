import EmptyCartButton from "./EmptyCartButton";
import CompletePurchase from "./CompletePurchase";

export default function ShoppingCart({ functions, info, amount }) {

    const h2Elements = [];
    let price = 0;

    for (let i = 0; i < info.length; i++) {
        if (amount[i] != 0) {
            h2Elements.push(<h2 key={i}>{amount[i]} {info[i].name}</h2>);
            price += amount[i] * info[i].price;
        }
    }

    return (
        <>
            <div id="addedProductsText">
                <h2>You added </h2>
                {h2Elements}
                <h2>to the cart and the total price is {price} kr</h2>
            
            <CompletePurchase functions={functions} />
            <EmptyCartButton functions={functions} />
            </div>
        </>
    );
}