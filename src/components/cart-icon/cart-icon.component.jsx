import React from "react";
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartQuantities } from "../../redux/cart/cart.selector";
import {createStructuredSelector} from 'reselect';

const CartIcon = ({dispatch,itemCount}) =>(
    <div className="cart-icon" onClick={()=>dispatch(toggleCartHidden())}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStatetoProps = createStructuredSelector(
    {itemCount:selectCartQuantities}
)

export default connect(mapStatetoProps)(CartIcon);