import React, { useState, useEffect } from "react";
import data from './data/data'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import Product from "./components/Product";

function App() {
  
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">NirYon Logo</a>
        </div>
        <div>
          <a href="/cart">לוגו סל קניות</a>
          <a href="/signin">התחברות / הרשמה</a>
        </div>
      </header>
      <main>
        
         <div>
          <div className="row center">
            {data.products.map(product => (
              <Product key={product.id} product={product}></Product>
            ))}           
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
