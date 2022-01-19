import {selectIsCollectionEmpty, selectIsFetching} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import {connect} from "react-redux";
import {compose} from "redux";
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import collectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector(
    // {isLoading: state => !selectIsCollectionEmpty(state)}
    {isLoading:selectIsFetching}
)

const CollectionContainer = compose(connect(mapStateToProps),WithSpinner)(collectionOverview); 

export default CollectionContainer; 

  