import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    cartCost: 0,
    cartCount: 0
}


const reducer = ( state = initialState, action ) => {
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

        default: return state;
    }
};

export default reducer;