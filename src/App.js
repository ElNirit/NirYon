import React, { useState, useEffect } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import { BrowserRouter,HashRouter , Route } from "react-router-dom";
import ProductPage from "./Page/ProductPage";
import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import Cart from "./components/Cart";
import Login from "./components/Login";


function App() {
  
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="d-flex align-items-center justify-content-between">
        <div>
          <a className="brand" href="/">לוגו של ניריון </a>
        </div>
        <div>
          <a href="/cart">לוגו סל קניות</a>
          <a href="/login">התחברות / הרשמה</a>
        </div>
      </header>
      <main>
        <switch>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/login" component={LoginPage} exact></Route>
          <Route path="/cart" component={Cart} exact></Route>

        </switch>
      </main>
      <footer className="row center">כל הזכויות שמורות לניריון</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
