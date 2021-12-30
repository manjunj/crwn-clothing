import React from "react";
import "./cart-item.styles.scss"

const CartItem = ({item:{name, imageUrl, quantity, price}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="photos"/>
        <span className="item-details">
            <div className="name">{name}</div>
            <div>{quantity} x ${price}</div>
        </span>
    </div>
)

export default CartItem;