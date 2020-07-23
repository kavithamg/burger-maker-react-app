import React from 'react';
import ProductCard from './Products/ProductCard'

const CartProducts = (props) => {
        let products = props.cartProducts.map((product, index) => {
            return (
                <ProductCard
                    key={product.id}
                    count={index + 1}
                    name={product.name}
                    ingredients={product.ingredients}
                    price={product.price}
                    productId={product.id}
                    quantity={product.quantity}
                    quantityAction={props.quantityAction}
                    deleteAction={props.deleteAction}
                />
            )
        })
        return (
            <div>
                <p><strong>Total cart price: </strong>USD {props.cartPrice.toFixed(2)}</p>
                {products}
                <br />
                <button onClick={props.deletePurchase}>Delete order</button>
                <button onClick={props.confirmPurchase}>Confirm order</button>
            </div>
        )
}


export default CartProducts;
