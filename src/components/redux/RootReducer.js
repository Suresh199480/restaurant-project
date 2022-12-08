import { combineReducers } from "redux";
import ShopReducers from "./shopping/ShopReducers";
const rootReducer = combineReducers({
    shop: ShopReducers
})

export default rootReducer;