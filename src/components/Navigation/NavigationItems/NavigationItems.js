import React from "react"
import {connect} from 'react-redux'

import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import * as actions from '../../../store/actions/index'

const navigationItems = (props) => {
    return (
        <div>
            <ul className = "NavigationItems">
                <NavigationItem link="/" exact>Burger Builder</NavigationItem>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/cart">Cart {props.cartCount}</NavigationItem>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartCount: state.cart.cartCount,
    };
}

export default connect(mapStateToProps) (navigationItems);