import * as actionTypes from "./ShopTypes";
import Products from "../../../Data";

const initialState = {
    products: Products,
    /*{id,title,img,price}*/
    cart: [],
    /*{id,title,img,price,QTY}*/
    currentItem: null
}


const ShopReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Get the items data from the products Array
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
                //Check Already Item In The Cart

            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty + 1 } : item) : [...state.cart, {...item, qty: 1 }],

            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }
        case actionTypes.INCREMENT:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty + 1 } : item),
            }
        case actionTypes.DECREMENT:

            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty - 1 } : item)


            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state;
    }
}





export default ShopReducers;