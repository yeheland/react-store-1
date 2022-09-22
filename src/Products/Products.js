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
                            const productIndex = props.panier.findIndex((prod)=>prod.name === product.name)
                            // console.log("is product exists", isProductExist)
                            if(productIndex === -1){
                                props.setPanier([...props.panier, {...product, quantity: 1}])

                            }else{
                                props.setPanier((prevPanier) => {
                                

                                  const productWithq = prevPanier.map((item, index) => {
                                    if(productIndex === index) {
                                      return {
                                        ...item,
                                        quantity: item.quantity + 1
                                      }
                                    }
                                    return item
                                  })
                                 
                                  return productWithq
                                }) 
                              }
                            
                        }}
                        />
                    ))
                }

            </section>
        </div>
    )
}
export default Products;