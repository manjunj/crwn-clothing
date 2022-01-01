import shopType from "./shop.type"

export const changeParam = param=>({
    type:shopType.CHANGEPARAMS,
    payload:param
})
