import cartType from "./cart.type"
import { updateCart } from "./cart.utils"

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const CartReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case cartType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case cartType.ADD_ITEM:
             return {
                ...state,
                cartItems: updateCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;