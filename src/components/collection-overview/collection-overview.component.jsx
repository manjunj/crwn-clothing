import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {connect} from "react-redux";
import { selectShopItems } from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import "./collection-overview.styles.scss"

const CollectionOverview= ({collections})=>{
        return (
            <div className="shop-page">
                {Object.keys(collections).map(key=>collections[key]).map(({id, ...info})=><CollectionPreview key={id} {...info}/>)}
            </div>
        )
    }

const mapStatetoProps = createStructuredSelector(
    {collections : selectShopItems}
)

export default (connect)(mapStatetoProps)(CollectionOverview); 