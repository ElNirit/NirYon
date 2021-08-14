// import { reduce } from 'json-server-auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartAct';
import MessageBox from '../components/MessageBox';

export default function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = () => {
        //delet action
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };

    return (
        <div className="row top">
            <div className="col-2">
                <h1>סל קניות</h1>
                {cartItems.length === 0 ? (
                    <MessageBox>
                        הסל קניות ריק.
                        <Link to="/"> לחנות</Link>
                    </MessageBox>) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product}>
                                <div className="row d-flex flex-nowrap">
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="small">
                                        </img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(item.countInStock).keys()].map(
                                                (x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div>
                                        ש"ח {item.price}
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item.product)}>
                                            מחק מוצר
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-2">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                לתשלום:
                                {/* ( :כמות {cartItems.reduce((a, c) => a + c.qty, 0)} )  */}
                                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}  ש"ח
                            </h2>
                        </li>
                        <li>
                            <button type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}>
                                תשלום
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
