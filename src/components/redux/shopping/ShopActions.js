import * as actionTypes from "./ShopTypes";

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        }
    }
}
export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        }
    }
}
export const Increment = (itemID, value) => {
    return {
        type: actionTypes.INCREMENT,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}
export const Decrement = (itemID, value) => {
    return {
        type: actionTypes.DECREMENT,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}
export const currentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
}