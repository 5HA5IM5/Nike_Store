import * as actionTypes from './shopping-types'

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const increaseQty = (itemID, values) => {
    return {
        type: actionTypes.INCREASE_QTY,
        payload: {
            id: itemID,
            qty: values
        }
    }
}

export const decreaseQty = (itemID, values) => {
    return {
        type: actionTypes.DECREASE_QTY,
        payload: {
            id: itemID,
            qty: values
        }
    }
}


export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
}