import React from 'react';
import data from '../data/data';
import Product from "../components/Product";


export default function HomePage() {
    return (
        <div>
          <div className="row center">
            {data.products.map(product => (
              <Product key={product.id} product={product}></Product>
            ))}           
          </div>
        </div>
    )
}