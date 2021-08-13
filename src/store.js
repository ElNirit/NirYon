import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import data from "./data/data";
import { productDetailsReducer, productListReducer } from "./reducers/productRed";


const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;