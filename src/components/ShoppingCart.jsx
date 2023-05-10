import EmptyCartButton from "./EmptyCartButton";
import CompletePurchase from "./CompletePurchase";

export default function ShoppingCart({ functions, data, amount }) {

    // Adds elements with every added product's info and calculates total price
    const productsAddedTextEl = [];
    let totalPrice = 0;

    for (let i = 0; i < data.length; i++) {
        if (amount[i] != 0) {
            const price = amount[i] * data[i].price;
            productsAddedTextEl.push(
                <div key={i}>
                    <h2>{amount[i]} {data[i].name} for {price} kr</h2>
                    <button onClick={() => { functions.remove1Product(i) }}>Remove</button>
                </div>);
            totalPrice += amount[i] * data[i].price;
        }
    }

    // Among other functions, buttons change dependency in useEffect in App to fetch url with changed data
    return (
        <>
            <div className="shoppingCartText">
                <h2 id="shoppingCartTitle">Shopping cart </h2>
                {productsAddedTextEl}
                <h2>to the cart and the total price is {totalPrice} kr</h2>

                <CompletePurchase functions={functions} />
                <EmptyCartButton functions={functions} />
            </div>
        </>
    );
}