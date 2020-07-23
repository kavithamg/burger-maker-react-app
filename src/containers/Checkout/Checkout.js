import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'
import * as actions from '../../store/actions/index'

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        if(this.props.cart.cart.length > 0)
        {
            this.props.clearCart();
            this.props.history.push('/')
        }else{
            this.props.history.goBack();
        }        
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            let ingredients = this.props.cart.cart.length > 0 ? this.props.cart.cart[0].ingredients : this.props.ings;
            summary = (
                <div>
                    {purchasedRedirect}
                <CheckoutSummary 
                    ingredients={ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}/>
            </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased,
        cart: state.cart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => dispatch(actions.clearCart()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);