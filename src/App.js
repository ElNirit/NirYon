import React, { useState, useEffect } from "react";
// import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Parse from 'parse/react-native';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./Page/ProductPage";
import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
import CartPage from "./Page/CartPage";
import { useSelector } from "react-redux";
import jsonUsers from './data/users.json';
import UserModel from './model/UserModel';
import SigninPage from "./Page/SigninPage";

function App() {
  const [users, setUsers] = useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
  console.log(users);
  const [activeUser, setActiveUser] = useState();
  const onLogout = () => setActiveUser(null);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  function login(activeUser) {
    setActiveUser(activeUser);
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }

  // function logout() {
  //   setActiveUser(null);
  //   localStorage.removeItem("activeUser");
  // }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-top">
            <Link to="/">
              <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
              <div className="lemonContainer">
                <div className="leaves"></div>
                <div className="lemon"></div>
                <p>ניריון</p>
              </div>   </Link>
          </div>
          <div>
            <Link to="/cart">סל קניות
              {cartItems.length > 0 && (
                <span className="badge border-light rounded-circle bg-light text-dark"> {cartItems.length}
                  <span className="visually-hidden">פריטים בסל</span>
                </span>
              )}

            </Link>
            {!activeUser ? <Link to="/signin">התחברות / הרשמה</Link> : null}
            {activeUser ? <Link to="/logout" onClick={onLogout}>התנתק</Link> : null}

          </div>
        </header>
        <main>
          <Switch>
            <Route path="/product/:id" component={ProductPage}></Route>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/signin" component={SigninPage} exact></Route>

            {/* <Route path="/login" exact  >
              <LoginPage users={users} activeUser={activeUser} onLogin={login}/>
            </Route> */}
            <Route path="/cart/:id?" component={CartPage} ></Route>

          </Switch>
        </main>
        <footer className="row center">כל הזכויות שמורות לניריון</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
