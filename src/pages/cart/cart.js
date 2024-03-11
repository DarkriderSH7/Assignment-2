import React, { useState, useEffect } from 'react'; 
export const Cart = () => { 
  const [cartItems, setCartItems] = useState([]);
  const [purchaseFinalized, setPurchaseFinalized] = useState(false);

  useEffect(() => {
    const userId = 1;

    fetch(`http://localhost/api/fetch_cart.php?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setCartItems(data); 
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const updateQuantity = (product, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + (price * item.quantity);
    }, 0);
  };

  const finalizePurchase = () => {
    alert('Your purchase has been finalized! Thank you for your order.');
    setPurchaseFinalized(true);
    setCartItems([]);
  };

  const totalPrice = calculateTotal(cartItems);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
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
        </div>
      )}
    </div>
  );
};
