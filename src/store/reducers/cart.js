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
        case actionTypes.ADD_QUANTITY:
            let mappedProduct = state.cart.map(value => {
                if(value.id === action.productId)
                {
                    value.quantity = value.quantity + 1;
                }

                return value;
            });
            let currentCartCount = state.cartCount + 1;
            let currentCartCost = state.cartCost * currentCartCount
            return {
                ...state,
                cartCount: currentCartCount,
                cartCost: currentCartCost
            }
        case actionTypes.REMOVE_QUANTITY:
            let filteredProduct = state.cart.map(value => {
                if(value.id === action.productId)
                {
                    value.quantity = value.quantity - 1;
                }

                return value;
            });

            return {
                ...state,
                cartCount: state.cartCount - 1,

            }
        case actionTypes.CLEAR_PRODUCT:
            let newProductList = state.cart.filter(value => value.id !== action.productId);
            return {
                ...state,
                cart: newProductList
            }
        default: return state;
    }
};

export default reducer;