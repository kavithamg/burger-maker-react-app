import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    cartCost: 0,
    cartCount: 0
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PRODUCT_BASKET:
            console.log(state)
            return {
                ...state,
                cartCount: state.cartCount + 1,
                cart: state.cart.concat(action.order)
            }
        case actionTypes.GET_BASKET_COUNT:
            return {
                ...state,
            }

        default: return state;
    }
};

export default reducer;