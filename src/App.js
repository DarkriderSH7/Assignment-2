import React, { useState } from 'react';
import './App.css';
import { Account } from './pages/account/account';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product, quantity) => {
    setCart(currentCart => {
      const isProductInCart = currentCart.find(item => item.id === product.id);
      if (isProductInCart) {
        // If the product is already in the cart, update the quantity
        return currentCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // If the product is not in the cart, add it
      return [...currentCart, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };
  const updateUser = (newDetails) => {
    setUser(newDetails); 
  };
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart 
            cart={cart} 
            setCart={setCart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        } />
        {/* Add a new Route for the account page */}
        <Route path="/account" element={
          <Account 
            user={user} 
            updateUser={updateUser}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
