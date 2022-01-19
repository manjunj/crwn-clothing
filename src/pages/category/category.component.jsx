import React from "react";
import "./collection.styles.scss"
import CollectionItem from "../../components/collection-item/collection-item.component"
import {connect} from "react-redux";
import {selectShopItems} from '../../redux/shop/shop.selector';
import { useParams } from "react-router-dom";
import { changeParam } from "../../redux/shop/shop.action";
import {createStructuredSelector} from 'reselect';

const Category = ({collection,changeParams})=>{
    const name = useParams().category;
    var items=[];
    if (!collection[name]){
      items = [];
    }
    else {
      items = collection[name].items;
    }
    return(  
    <div className="collection-page">
        <div className="title">{name}</div>
        <div className="items"> {items.map(({id, ...info})=><CollectionItem key={id} item={{id, ...info}}/>)}</div>
    </div>)
  }


const mapStateToProps = createStructuredSelector(
  {collection : selectShopItems}
)

const mapDispatchToProps = dispatch => ({
  changeParams: item => dispatch(changeParam(item)),
});

export default (connect)(mapStateToProps,mapDispatchToProps)(Category); 