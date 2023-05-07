import EmptyCartButton from "./EmptyCartButton";
import CompletePurchase from "./CompletePurchase";

export default function ShoppingCart({ functions, data, amount }) {

    // Adds elements with every added product's info and calculates total price
    const productsAddedTextEl = [];
    let price = 0;

    for (let i = 0; i < data.length; i++) {
        if (amount[i] != 0) {
            productsAddedTextEl.push(<h2 key={i}>{amount[i]} {data[i].name}</h2>);
            price += amount[i] * data[i].price;
        }
    }

    // Among other functions, buttons change dependency in useEffect in App to fetch url with changed data
    return (
        <>
            <div className="shoppingCartText">
                <h2 id="shoppingCartTitle">Shopping cart </h2>
                {productsAddedTextEl}
                <h2>to the cart and the total price is {price} kr</h2>
            
            <CompletePurchase functions={functions} />
            <EmptyCartButton functions={functions} />
            </div>
        </>
    );
}