import SHOP_DATA from "./shop.data";
import shopType from "./shop.type";

const INITIAL_STATE = {
    collections: SHOP_DATA,
    params:""
}

const ShopReducer = (state = INITIAL_STATE, action)=>{
    // console.log(action)
    switch (action.type){
        case shopType.CHANGEPARAMS:
            return {...state, params:action.payload}
        default:return state
    }
}

export default ShopReducer;