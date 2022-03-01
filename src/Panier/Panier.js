import React from "react";

function Panier(props) {
    const totalPanier = props.panier.reduce((acc, curr) => acc + curr.price, 0)
    return (
        <div>
            <div><p>Votre panier est vide</p></div>
            <div>
                <ul>
                    {
                        props.panier.map((item) =>
                            <li>{item.name} {item.price}€</li>
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