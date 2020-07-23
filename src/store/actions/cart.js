import * as actionTypes from './actionTypes';

export const addBasket = (productData) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADD_PRODUCT_BASKET,
            product: productData
        })
    }
};

export const getBasketCount = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_BASKET_COUNT
        });
    }
}

export const productQuantity = (action, product_id) => {
    return (dispatch) => {
        dispatch({
            type: action === 'add' ? actionTypes.ADD_QUANTITY : actionTypes.REMOVE_QUANTITY,
            productId: product_id
        });
    }
}

export const clearProduct = (product_id) => {
    return(dispatch) => {
        dispatch({
            type: actionTypes.CLEAR_PRODUCT,
            productId: product_id
        });
    }
}

export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CLEAR_CART
        });
    }
}