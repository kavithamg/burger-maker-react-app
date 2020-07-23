import React from 'react';

const ProductCard = (props) => {
    return (
        <div>
            <h5>Burger No: {props.count}</h5>
            <p><span className="chip">Bacon: {props.ingredients.bacon}</span> <span className="chip">Cheese: {props.ingredients.cheese}</span> <span className="chip">Meat: {props.ingredients.meat}</span> <span className="chip">Salad: {props.ingredients.salad}</span></p>
            <strong><p>Price: USD {props.price.toFixed(2)}</p></strong>

            <button>Add</button>
            <button>Remove</button>
        </div>
    )
}

export default ProductCard;