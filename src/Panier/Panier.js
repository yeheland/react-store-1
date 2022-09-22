import React from "react";

function Panier(props) {
    console.log("panier props", props)
    const totalPanier = props.panier.reduce((acc, curr) => acc + Number(curr.price), 0)
    return (
        <div>
            <div><p>Votre panier est vide</p></div>
            <div>
                <ul>
                    {
                        props.panier.map((item, index) =>
                            <li key={index}>{item.quantity} {item.name} {item.price}€</li>
                        )
                    }
                </ul>
            </div>
            <p>Total : {totalPanier}€</p>
            <button
                onClick={() => props.setPanier([])}
            >Vider le panier</button>
        </div>

    )
}

export default Panier;