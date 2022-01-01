import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route, Routes} from 'react-router-dom';
import Category from '../category/category.component';

const ShopPage = ()=>(
    <div>
    <Routes>
        <Route exact path="/" element={<CollectionOverview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
    </div>
)

export default ShopPage; 