import {createSelector} from 'reselect';

const selectShop = state=>state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections?shop.collections:[]
)

export const selectIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

// export const selectIsCollectionEmpty = createSelector(
//     [selectShop],
//     shop => !!shop.collections
// )

// export const selectCollection = collectionUrlParam =>
//   createSelector(
//     [selectShop],
//     shop => shop.collections[collectionUrlParam]
//   );