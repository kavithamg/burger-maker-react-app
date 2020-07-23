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
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalCartPrice: state.cart.cartCost,
        products: state.cart.cart,
        currentCart: state.cart
    };
}

export default connect(mapStateToProps)(Cart);

