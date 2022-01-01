import React from "react";
import "./checkout.styles.scss"
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import { selectCartItems,selectCartCost } from "../../redux/cart/cart.selector";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckOut = ({cartItems,total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => <CheckOutItem item={item} key = {item.id}/>)}
        <div className="total">
            Total: ${total}
        </div>
        <StripeCheckoutButton price = {total}/>
    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems :selectCartItems,
    total :selectCartCost
})

export default connect(mapStatetoProps)(CheckOut);