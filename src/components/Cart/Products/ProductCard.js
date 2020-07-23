import React from 'react';

const ProductCard = (props) => {
    return (
        <div>
            <h5>{props.name}</h5>
            <p><span className="chip">Bacon: {props.ingredients.bacon}</span> <span className="chip">Cheese: {props.ingredients.cheese}</span> <span className="chip">Meat: {props.ingredients.meat}</span> <span className="chip">Salad: {props.ingredients.salad}</span></p>
            <strong><p>Price: USD {props.price}</p></strong>
            <p>Quantity: {props.quantity}</p>
            <button onClick={() => props.quantityAction('add', props.productId)}>Add</button>
            <button onClick={() => props.quantityAction('remove', props.productId)}>Remove</button>
            <button onClick={() => props.quantityAction('remove', props.productId)}>Delete Product</button>
        </div>
    )
}

export default ProductCard;