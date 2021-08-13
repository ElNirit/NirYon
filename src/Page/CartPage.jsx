import React from 'react'

export default function CartPage() {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=') [1]): 1;
    return (
        <div>
            <h1>סל קניות</h1>
            <p> הוסף לסל: ProductId:{productId} Qty: {qty}</p> 
        </div>
    );
}
