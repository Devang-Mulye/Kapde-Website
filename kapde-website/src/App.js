import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <div className="App">
        {/* <Router> */}

        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

        {/* </Router> */}
      </div>
    </>

  );
}

export default App;
