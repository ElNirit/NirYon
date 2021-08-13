import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from '../actions/cartAct';

export default function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=') [1]): 1;
        const dispatch= useDispatch();
        useEffect(() =>{
            if(productId){
                dispatch(addToCart(productId,qty));
            }
        }, [dispatch, productId, qty]);
    return (
        <div>
            <h1>סל קניות</h1>
            <p> הוסף לסל: ProductId:{productId} Qty: {qty}</p> 
        </div>
    );
}
