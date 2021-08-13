import React from 'react'
import data from '../data/data'
// import Product from '../components/product'

export default function ProductPage(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product) {
        return (
        <div>המוצר לא נמצא!</div>
        );
    }
    return(
        <div>
            <div className="row">
                <div className="col-4">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-4">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>                           
                            {"חקלאי : "+ product.owner}
                        </li>
                        {/* <li>
                            מחיר:
                            {product.price} ש"ח
                        </li> */}
                        <li>
                            {"תיאור : "+product.description}
                        </li>
                    </ul>
                </div>
                <div className="col-2">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>מחיר: </div>
                                    <div className="price">{" "+product.price} ש"ח</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>מלאי:</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="success"> נמצא במלאי </span>
                                            ):(
                                            <span className="danger"> אזל המלאי </span>
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