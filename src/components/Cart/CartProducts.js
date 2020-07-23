import React from 'react';
import ProductCard from './Products/ProductCard'

const CartProducts = (props) => {
        let products = props.cartProducts.map((product, index) => {
            return (
                <ProductCard
                    key={product.id}
                    count={index + 1}
                    ingredients={product.ingredients}
                    price={product.price}
                    productId={product.id}
                />
            )
        })
        return (
            <div>
                <p><strong>Total cart price: </strong>USD {props.cartPrice.toFixed(2)}</p>
                {products}
            </div>
        )
}


export default CartProducts;
