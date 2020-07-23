import React, {Component} from 'react';
import {connect} from 'react-redux'

import Aux from '../../hoc/Aux';
import CartProducts from '../../components/Cart/CartProducts'
import * as actions from '../../store/actions/index'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

class Cart extends Component{

    state = {
        purchasing: false,
    }

    purchaseHandler = () => {
        this.setState( { purchasing: true } );
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout')
    }

    purchaseDeleteHandler = () => {
        this.props.clearCart()
        this.props.history.push('/')
    }

    render(){
        let products = (
            <div>
                <img src={require('../../assets/images/empty-cart.png')} alt="empty cart" />
            </div>
        );
        let orderSummary = null;
        if(this.props.products.length !== 0){
            products = (
                <CartProducts
                    cartPrice={this.props.totalCartPrice}
                    cartProducts={this.props.products}
                    quantityAction={this.props.quantityAction}
                    deleteAction={this.props.deleteProduct}
                    confirmPurchase={this.purchaseHandler}
                    deletePurchase={this.purchaseDeleteHandler}
                />
            )

            orderSummary = <OrderSummary
                ingredients={this.props.products[0].ingredients}
                price={this.props.currentCart.cartCost}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {products}
            </Aux>
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
        deleteProduct: (productId) => dispatch(actions.clearProduct(productId)),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        clearCart: () => dispatch(actions.clearCart())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Cart,axios));

