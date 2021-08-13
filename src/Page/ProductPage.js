import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productAct';
// import { Button, Card, Form } from 'react-bootstrap';



export default function ProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, product, error } = productDetails;


    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    <Link to="/">חזרה לחנות</Link>
                    <div className="row top">
                        <div className="col-4">
                            <img className="large" src={product.image} alt={product.name}></img>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li>
                                    <h1>{product.name}</h1>
                                </li>
                                <li>
                                    {"חקלאי : " + product.owner}
                                </li>
                                <li>
                                    {"תיאור : " + product.description}
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>מחיר: </div>
                                            <div className="price">{product.price} ש"ח</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>מלאי:</div>
                                            <div>
                                                {product.countInStock > 0 ? (
                                                    <span className="success"> נמצא במלאי </span>
                                                ) : (
                                                    <span className="danger"> אזל המלאי </span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <button className="primary block">הוסף לסל</button>
                                    </li> */}
                                    {product.countInStock > 0 && (
                                        <>
                                            <li>
                                                <div className="row">
                                                    <div>כמות</div>
                                                    <div>
                                                        <select value={qty} onChange={e => setQty(e.target.value)}>
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="primary block" onClick={addToCartHandler} >
                                                    הוסף לסל
                                                </button>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}