export const updateCart = (cart,newItem) =>{
    if (cart.find(item => item.id === newItem.id)){
        return cart.map(item=> (
            (item.id === newItem.id)?
            {...item,quantity:item.quantity+1}
            :item))
    }
    return [...cart ,{...newItem,quantity:1}]
}

export const deleteCart = (cart,newItem) =>{
    cart= cart.filter(item => (item.id !== newItem.id || item.quantity!==1))
    return cart.map(item=> (
        (item.id === newItem.id)?
        {...item,quantity:item.quantity-1}:item))
}


// export const deleteCart = (cart,item) =>{
//     console.log(cart)
//     console.log(item)
//     return cart.map(item=> (
//         (item.id === item.id)?
//         (item.quantity===1?null:{...item,quantity:item.quantity-1})
//         :item))
// }
