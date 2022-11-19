import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Mens from "./Components/Mens";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Login from "./Components/Login";
import Your_orders from "./Components/Your_orders";
import Cart from "./Components/Cart";

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Home />

        <Routes>
          <Route exact path="/mens">
            <Mens />
          </Route>
          <Route exact path="/women">
            <Women />
          </Route>
          <Route exact path="/kids">
            <Kids />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/your_contacts">
            <Your_orders />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Routes>
      </Router>
    </>


  );
}

export default App;
