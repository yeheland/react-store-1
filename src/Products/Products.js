import React from "react";
import { useState } from "react";
import products from './product.json'
import Product from './Product'

function Products(props) {
    
    return (
        <div>
            <section className='d-flex flex-wrap'>

                {
                    products.map((product, index) => (
                        
                        <Product
                        key={index}
                        name={product.name}
                        price={product.price}
                        click={() => {
                            props.setPanier([...props.panier, product])
                            
                        }}
                        />
                    ))
                }

            </section>
        </div>
    )
}
export default Products;