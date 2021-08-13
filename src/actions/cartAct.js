import Axios from "axios";
import {CART_ADD_ITEM} from '../constants/cartConst';

export const addToCart = (productId, qty) => async (dispatch, getState) =>{
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({ 
        type: CART_ADD_ITEM, 
        payload:{
            name: data.name,
            Image: data.image,
            Price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });
};