import EmptyCartButton from "./emptyCartButton";

export default function ShoppingCart({ emptyCart, check, info, amount}) {
    console.log(amount);

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
            <div>
                <h2>You added </h2>
                {h2Elements}
                <h2>to the cart and the total price is {price}</h2>
            </div>
            <EmptyCartButton emptyCart={emptyCart} check={check}/>
        </>
    );
}