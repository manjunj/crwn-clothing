import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import {connect} from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import {createStructuredSelector} from 'reselect';
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropDown =({cartItems,dispatch})=>{
    let navigate = useNavigate();
    // console.log(cartItems);

    return (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length?
            cartItems.map(item => <CartItem item={item} key = {item.id}/>)
            :<h2>Your cart is empty</h2>}
        </div>
        <CustomButton onClick={()=> 
        {navigate("/checkout");
        dispatch(toggleCartHidden())}}>
        Go To Checkout</CustomButton>
    </div>
)}

const mapStatetoProps = createStructuredSelector (
   {cartItems : selectCartItems
   })

export default connect(mapStatetoProps)(CartDropDown);
