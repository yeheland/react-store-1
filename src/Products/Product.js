import React from "react";

function Product(props){

    

    return(
        <article className='p-3'>
            <h2>{props.name}</h2>
            <p>{props.price} €</p>
            <button
            onClick={props.click}
            >Ajouter au panier</button>
        </article>
    )
}

export default Product;