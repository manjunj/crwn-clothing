import shopType from "./shop.type";



const INITIAL_STATE = {
    collections: null,
    params:"",
    isFetching:false,
    errorMessage:""
}

const ShopReducer = (state = INITIAL_STATE, action)=>{
    // console.log(action.type)
    switch (action.type){
        case shopType.CHANGEPARAMS:
            return {...state, params:action.payload}
        case shopType.FETCH_COLLECTIONS_START:
            return {...state, isFetching:true}
        case shopType.FETCH_COLLECTIONS_FAILURE:
            return {...state, isFetching:false, errorMessage:action.payload}
        case shopType.FETCH_COLLECTIONS_SUCCESS:
            return {...state, isFetching:false, collections:action.payload}
        default:return state
    }
}

export default ShopReducer;