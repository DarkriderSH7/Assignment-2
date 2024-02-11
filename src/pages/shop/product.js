import React, { useState } from 'react';

export const Product = ({ data, addToCart }) => {
  const { productName, price, productimage } = data;
  const [quantity, setQuantity] = useState(1); // State to keep track of quantity
  const [addedToCart, setAddedToCart] = useState(false); // New state to track add to cart action

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrement quantity
  const decrementQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1); // Ensure quantity does not go below 1
  };

  // Handle add to cart action
  const handleAddToCart = () => {
    addToCart(data, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset addedToCart state after 2 seconds
  };

  return (
    <div className='product'>
      <h2>{productName}</h2>
      <p>Price: ${price}</p>
      <img src={productimage} alt={productName} className="product-image" />
      
      {/* Move the quantity-selector div above the Add to Cart button */}
      <div className="quantity-selector">
        <button onClick={decrementQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>

      {/* Add to Cart button */}
      <button onClick={handleAddToCart} disabled={addedToCart}>
        {addedToCart ? 'Added' : 'Add to Cart'}
      </button>

      {/* Feedback message */}
      {addedToCart && <p>Added to cart!</p>}
    </div>
  );
};
