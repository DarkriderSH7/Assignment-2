import React, { useState } from 'react';

export const Cart = ({ cart, setCart }) => {
  
  // Function to update the quantity of an item in the cart
  const updateQuantity = (product, newQuantity) => {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // State to handle purchase confirmation visibility
  const [purchaseFinalized, setPurchaseFinalized] = useState(false);

  // Function to handle finalizing the purchase
  const finalizePurchase = () => {
    // Display an alert to the user
    alert('Your purchase has been finalized! Thank you for your order.');
    // Set purchase as finalized
    setPurchaseFinalized(true);
    // Clear the cart
    setCart([]);
  };

  // Function to calculate the total price
  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + (price * item.quantity);
    }, 0);
  };

  // Calculate the total price using the calculateTotal function
  const totalPrice = calculateTotal(cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.productimage} alt={item.productName} className="cart-item-image" />
              <div>
                <h3>{item.productName}</h3>
                <p>Price: ${parseFloat(item.price.replace(/[^0-9.-]+/g, "")).toFixed(2)}</p>
                <div className="quantity-selector">
                  <button onClick={() => updateQuantity(item, Math.max(item.quantity - 1, 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button onClick={finalizePurchase} disabled={purchaseFinalized}>
            {purchaseFinalized ? 'Purchase Complete' : 'Finalize Purchase'}
          </button>
          {purchaseFinalized && <p>Thank you for your purchase!</p>}
        </div>
      )}
    </div>
  );
};
