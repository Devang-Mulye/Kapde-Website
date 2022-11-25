import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Mens from './Components/Mens';
import Women from './Components/Women';
import Kids from './Components/Kids';
import Login from './Components/Login';
import Your_orders from './Components/Your_orders';
import Cart from './Components/Cart';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Home />

        <Routes>
          <Route exact path='/mens' element={<Mens />}>

          </Route>
          <Route exact path='/women' element={<Women />}>

          </Route>
          <Route exact path='/kids' element={<Kids />}>

          </Route>

          <Route exact path='/login' element={<Login />}>

          </Route>
          <Route exact path='/your_contacts' element={<Your_orders />}>

          </Route>
          <Route exact path='/cart' element={<Cart />}>

          </Route>
        </Routes>
      </Router>
    </>


  );
}

export default App;
