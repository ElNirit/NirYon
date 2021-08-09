import React, { useState, useEffect } from "react";
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

function App() {
  
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="">NirYon</a>
        </div>
        <div>
          <a href="">Cart</a>
          <a href="">Sign in</a>
        </div>
      </header>
     
    </div>
  );
}

export default App;
