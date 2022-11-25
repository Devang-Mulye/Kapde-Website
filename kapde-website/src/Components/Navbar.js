import React from 'react';
import '../Css/Navbar.css';
import {Link} from 'react-router-dom';
 

function Navbar() 
{
  return (
    
      <header >
        <div className='header' >
{/* 
        <img className='header_img' src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='img here'></img> */}

          <div className='nav_bar'>
            <div className='logo'> <img className='logo_img' src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt='img here'></img></div>
            <div className='nav_left'>
              <ul>
                <li><button className='button_nav'> <Link to ="/mens" >MENS</Link></button></li>
                <li><button className='button_nav'> <Link to ="/women">WOMEN</Link></button></li>
                <li><button className='button_nav'> <Link to ="/kids">KIDS</Link></button></li>

              </ul>
            </div>
            <div className='nav_right'>
              <ul>
                <li> <button className='button_nav'><Link to ="/login">LOGIN</Link></button></li>
                <li><button className='button_nav'> <Link to ="/your_orders" >YOUR ORDERS</Link></button></li>
                <li><button className='button_nav'> <Link to ="/cart" >CART</Link></button></li>

              </ul>
            </div>
          </div>
          
        </div>
        
      </header>
    


  );
}

export default Navbar;
