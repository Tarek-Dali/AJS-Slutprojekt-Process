import EmptyCartButton from "./EmptyCartButton";
import CompletePurchase from "./CompletePurchase";

export default function ShoppingCart({ functions, data, amount }) {

    const h2Elements = [];
    let price = 0;

    for (let i = 0; i < data.length; i++) {
        if (amount[i] != 0) {
            h2Elements.push(<h2 key={i}>{amount[i]} {data[i].name}</h2>);
            price += amount[i] * data[i].price;
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