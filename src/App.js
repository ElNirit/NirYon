import React, { useState, useEffect } from "react";
import data from './data/data'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

function App() {
  
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="">NirYon Logo</a>
        </div>
        <div>
          <a href="">לוגו סל קניות</a>
          <a href="">התחברות / הרשמה</a>
        </div>
      </header>
      <main>
        
         <div>
          <div className="row center">
            {data.products.map(product => (
            <div key={product.id} className="card">
              <a href={'/product/${product.id}'}>
                <img className="medium" src={product.image} alt={product.name} />
              </a>
              <div className="card-body">
                <a href={'/product/${product.id}'}>
                  <h2>{product.name}</h2>
                </a>
                {/* <div className="rating">
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                </div> */}
                <div className="price">{product.price} ש"ח</div>
              </div>
            </div> 
            ))}           
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
