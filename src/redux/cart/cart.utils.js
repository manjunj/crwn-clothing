export const updateCart = (cart,newItem) =>{
    if (cart.find(item => item.id === newItem.id)){
        return cart.map(item=> (
            (item.id === newItem.id)?
            {...item,quantity:item.quantity+1}
            :item))
    }
    return [...cart ,{...newItem,quantity:1}]
}
