import React from "react";
import "./checkout-item.styles.scss"
import {connect} from "react-redux"
import { deleteItem, addItem, decreaseQuantity} from "../../redux/cart/cart.action";

const CheckOutItem = ({item,deleteItem,addItem,decreaseQuantity})=>{
    const {name,imageUrl,quantity,price} = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt = "product"/>
            </div>
            <div className="name">
                {name}
            </div>
            <div className="quantity">
                <span onClick={()=>decreaseQuantity(item)}>&#10094; </span>
                {quantity}
                <span onClick={()=>addItem(item)}> &#10095;</span>
            </div>
            <div className="price">
                $ {price}
            </div>
            <div className="remove-button" onClick={()=>deleteItem(item)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchtoProps = dispatch=>({
    deleteItem:(item)=>dispatch(deleteItem(item)),
    addItem:(item)=>dispatch(addItem(item)),
    decreaseQuantity:(item)=>dispatch(decreaseQuantity(item))
})

export default connect(null,mapDispatchtoProps)(CheckOutItem)