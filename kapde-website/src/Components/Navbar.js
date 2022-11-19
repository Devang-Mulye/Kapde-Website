import React from 'react';
import '../Css/Navbar.css';
import {Link} from 'react-router-dom';
 

function Navbar() 
{
  return (
    
      <header >
        <div className='header' >

        <img className='header_img' src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='img here'></img>

          <div className='nav_bar'>
            <div className='logo'><img src='https://images.unsplash.com/photo-1602335422296-6c6346ee71f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt = "Image1"></img></div>
            <div className='nav_left'>
              <ul>
                <li> <Link to ="/mens">MENS</Link></li>
                <li> <Link to ="/women">WOMEN</Link></li>
                <li> <Link to ="/kids">KIDS</Link></li>

              </ul>
            </div>
            <div className='nav_right'>
              <ul>
                <li> <Link to ="/login">LOGIN</Link></li>
                <li> <Link to ="/your_orders" >YOUR ORDERS</Link></li>
                <li> <Link to ="/cart" >CART</Link></li>

              </ul>
            </div>
          </div>
          
        </div>
        
      </header>
    


  );
}

export default Navbar;
