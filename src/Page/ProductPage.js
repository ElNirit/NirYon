import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data/data'
// import Product from '../components/product'

export default function ProductPage(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product) {
        return (
        <div>המוצר לא נמצא!</div>
        );
    }
    return (
        <div>
            <Link to="/">חזרה</Link>
            <div className="row top">
                <div className="col-2">
                    <img 
                        className="large" 
                        src={product.image} 
                        alt={product.name}
                    ></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            חקלאי:
                            {product.brand}
                        </li>
                        <li>
                            מחיר:
                            {product.price} ש"ח
                        </li>
                        <li> 
                            תיאור:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>מחיר:</div>
                                    <div className="price">{product.price} ש"ח</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>סטטוס:</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="success"> נמצא במלאי</span>
                                            ):(
                                            <span className="error"> אזל המלאי</span>
                                        )}
                                    </div>

                                </div>
                            </li>
                            <li>
                                <button className="primary block">הוסף לסל</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}