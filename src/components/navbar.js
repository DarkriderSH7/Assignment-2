import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/">SHOP</Link>
            <Link to="/cart">CART</Link>
            <Link to="/account">ACCOUNT</Link>
    </div>
    </div>
  )
}
