import React, {Component} from 'react';
import {connect} from 'react-redux'

import CartProducts from '../../components/Cart/CartProducts'

import * as actions from '../../store/actions/index'

class Cart extends Component{
    render(){
        console.log(this.props.currentCart);

        return (
            <div>
                <CartProducts
                    cartPrice={this.props.totalCartPrice}
                    cartProducts={this.props.products}
                    quantityAction={this.props.quantityAction}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalCartPrice: state.cart.cartCost,
        products: state.cart.cart,
        cartCount: state.cart.cartCount,
        currentCart: state.cart
    };
}

const mapDispatchToProps = dispatch => {
    return {
        quantityAction: (action, productId) => dispatch(actions.productQuantity(action, productId)),
        deleteProduct: (productId) => dispatch(actions.productQuantity(productId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

