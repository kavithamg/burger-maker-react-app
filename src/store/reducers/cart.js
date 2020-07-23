import * as actionTypes from '../actions/actionTypes';
import {sortCartByCreatedAt} from '../utility'

const initialState = {
    cart: [],
    cartCost: 0,
    cartCount: 0
}


const reducer = ( state = initialState, action ) => {
    let oldProduct = {};
    let oldCart = {};
    let newCart = {};

    switch ( action.type ) {
        case actionTypes.ADD_PRODUCT_BASKET:
            return {
                ...state,
                cartCount: state.cartCount + 1,
                cartCost: state.cartCost + action.product.totalCost,
                cart: state.cart.concat(action.product.product)
            }
        case actionTypes.GET_BASKET_COUNT:
            return {
                ...state,
            }
        case actionTypes.ADD_QUANTITY:
            oldProduct = state.cart.find(value => value.id === action.productId)
            oldProduct.quantity = oldProduct.quantity + 1;
            oldProduct.price = (oldProduct.constPrice * oldProduct.quantity).toFixed(2);

            oldCart = state.cart.filter(value => value.id !== action.productId);
            newCart = sortCartByCreatedAt([...oldCart, oldProduct]);
            return {
                ...state,
                cartCount: state.cartCount + 1,
                cartCost: state.cartCost + oldProduct.constPrice,
                cart: newCart
            }
        case actionTypes.REMOVE_QUANTITY:
            oldProduct = state.cart.find(value => value.id === action.productId)
            oldProduct.quantity = oldProduct.quantity - 1;
            oldProduct.price = (oldProduct.constPrice * oldProduct.quantity).toFixed(2);

            oldCart = state.cart.filter(value => value.id !== action.productId);
            newCart = sortCartByCreatedAt([...oldCart, oldProduct]);

            return {
                ...state,
                cartCount: state.cartCount - 1,
                cartCost: state.cartCost - oldProduct.constPrice,
                cart: newCart
            }
        case actionTypes.CLEAR_PRODUCT:
            oldProduct = state.cart.find(value => value.id === action.productId);
            oldCart = state.cart.filter(value => value.id !== action.productId);
            newCart = sortCartByCreatedAt(oldCart);
            return {
                ...state,
                cartCount: state.cartCount - oldProduct.quantity,
                cartCost: state.cartCost - parseFloat(oldProduct.price),
                cart: newCart
            }
        case actionTypes.CLEAR_CART:

            return {
                ...state,
                cart: [],
                cartCost: 0,
                cartCount: 0
            }
        default: return state;
    }
};

export default reducer;