import React, { useState, useEffect } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import { BrowserRouter, Route } from "react-router-dom";
import ProductPage from "./Page/ProductPage";
import HomePage from "./Page/HomePage";

function App() {
  
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="d-flex align-items-center justify-content-between">
        <div>
          <a className="brand" href="/">NirYon Logo</a>
        </div>
        <div>
          <a href="/cart">לוגו סל קניות</a>
          <a href="/signin">התחברות / הרשמה</a>
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductPage}></Route>
        <Route path="/" component={HomePage} exact></Route>
         
      </main>
      <footer className="row center">ניריון</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
