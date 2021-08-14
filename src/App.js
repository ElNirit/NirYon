import React, { useState, useEffect } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import { BrowserRouter, Switch , Route, Link } from "react-router-dom";
import ProductPage from "./Page/ProductPage";
import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
import CartPage from "./Page/CartPage";
import { useSelector } from "react-redux";


function App() {
  
  const cart= useSelector(state =>state.cart);
  const {cartItems} = cart;
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="d-flex align-items-center justify-content-between">
        <div>
          <Link className="brand" to="/">לוגו של ניריון </Link>
        </div>
        <div>
          <Link to="/cart">סל קניות 
          {cartItems.length > 0 && (
            <span className="badge border-light rounded-circle bg-light text-dark"> {cartItems.length}
              <span className="visually-hidden">פריטים בסל</span>
            </span>
          )}

          </Link>
          <Link to="/login">התחברות / הרשמה</Link>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/login" component={LoginPage} exact></Route>
          <Route path="/cart/:id?" component={CartPage} ></Route>

        </Switch>
      </main>
      <footer className="row center">כל הזכויות שמורות לניריון</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
