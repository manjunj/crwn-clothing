import cartType from "./cart.type"
import { updateCart, deleteCart} from "./cart.utils"

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
        case cartType.DELETE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(item=>item.id!==action.payload.id)
            }
        case cartType.DECREASE_QUANTITY:
            return{
                ...state,
                cartItems: deleteCart(state.cartItems,action.payload)
           }
        default:
            return state;
    }
}

export default CartReducer;