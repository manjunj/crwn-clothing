import cartType from "./cart.type";

export const toggleCartHidden=()=>({
    type:cartType.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type:cartType.ADD_ITEM,
    payload: item
})

export const deleteItem = item =>({
    type:cartType.DELETE_ITEM,
    payload:item
})

export const decreaseQuantity = item =>({
    type:cartType.DECREASE_QUANTITY,
    payload:item
})