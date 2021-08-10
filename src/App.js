import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';

import Context from "./Context";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
    this.routerRef = React.createRef();
  }

  componentDidMount() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    this.setState({ user });
  }
  login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
  
    if(res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }
  
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }
  
  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <Router ref={this.routerRef}>
        <div className="App">
          <nav
            className="navbar container"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 ">ניריון</b>
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/products" className="navbar-item">
                  מוצרים
                </Link>
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-product" className="navbar-item">
                    הוספת מוצר
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  סל קניות
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    { Object.keys(this.state.cart).length }
                  </span>
                </Link>
                {!this.state.user ? (
                  <Link to="/login" className="navbar-item">
                    התחברות
                  </Link>
                ) : (
                  <Link to="/" onClick={this.logout} className="navbar-item">
                    יציאה
                  </Link>
                )}
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/products" component={ProductList} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

// import React, { useState, useEffect } from "react";
// import { Button, Card, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Parse from 'parse/react-native';
// import { BrowserRouter, Route } from "react-router-dom";
// import ProductPage from "./Page/ProductPage";
// import HomePage from "./Page/HomePage";

// function App() {
  
//   return (
//   <BrowserRouter>
//     <div className="grid-container">
//       <header className="row">
//         <div>
//           <a className="brand" href="/">NirYon Logo</a>
//         </div>
//         <div>
//           <a href="/cart">לוגו סל קניות</a>
//           <a href="/signin">התחברות / הרשמה</a>
//         </div>
//       </header>
//       <main>
//         <Route path="/product/:id" component={ProductPage}></Route>
//         <Route path="/" component={HomePage} exact></Route>
         
//       </main>
//       <footer className="row center">All right reserved</footer>
//     </div>
//   </BrowserRouter>
//   );
// }

// export default App;
