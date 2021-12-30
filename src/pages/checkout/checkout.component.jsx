import React from "react";
import "./checkout.styles.scss"
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import { selectCartItems,selectCartCost } from "../../redux/cart/cart.selector";

const CheckOut = ({cartItems,total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
                {cartItems.map(item=>item.name)}
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
        <div className="total">
            Total: ${total}
        </div>
    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems :selectCartItems,
    total :selectCartCost
})

export default connect(mapStatetoProps)(CheckOut);