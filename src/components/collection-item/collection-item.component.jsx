import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from "react-redux"
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({item,addItem}) => {
    // console.log(item)
    const {name,price,imageUrl} =  item;
    return (
    <div className ='collection-item'>
        <div className = 'image' style = {{backgroundImage :"url("+ imageUrl+ ")"}}/>
        <div className = 'collection-footer'>
            <span className = 'name'>{name}</span>
            <span className = 'price'>${price}</span>
        </div>
    <CustomButton type="button" onClick={()=>addItem(item)} inverted>Purchase</CustomButton>
    </div>
    )
}

const mapDispatchtoProps = dispatch =>({
    addItem:item=>dispatch(addItem(item))})

export default connect(null,mapDispatchtoProps)(CollectionItem);