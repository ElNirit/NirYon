import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";

// export default function ProductList() {
//   return <>רשימת מוצרים</>
// }


const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="hero ">
        <div className="hero-body container">
          <h4 className="title">רשימת מוצרים</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                לא נמצאו מוצרים
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);