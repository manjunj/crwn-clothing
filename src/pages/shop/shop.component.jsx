import React from 'react';
import {fetchCollectionStartAsync} from '../../redux/shop/shop.action';
import {Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryContainer from '../category/category.container';
import CollectionContainer from '../../components/collection-overview/collection-overview.container';

class ShopPage extends React.Component{

    async componentDidMount(){
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();
    }

    render(){ 
        // const {collectionEmpty} = this.props;
        return(
            <div>
            <Routes>
                <Route exact path="/" element={<CollectionContainer/>} />
                <Route path=":category" element={<CategoryContainer />} />
            </Routes>
            </div>)
    }
}

const mapDispatchtoProps = dispatch =>({
    fetchCollectionStartAsync: collection=> dispatch(fetchCollectionStartAsync(collection))
  })

export default connect(null,mapDispatchtoProps)(ShopPage); 