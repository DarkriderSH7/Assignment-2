import React, { useState } from 'react';

export const Product = ({ data }) => {
  const { id: productId, productName, price, productimage } = data;
  const [quantity, setQuantity] = useState(1); // State to keep track of quantity
  const [addedToCart, setAddedToCart] = useState(false); // New state to track add to cart action

  const addToCart = (productId, quantity) => {
    const userId = 1; 

    fetch('http://localhost/api/addtocart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId, quantity })
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 'success') {
        console.log('Item added to cart successfully');
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000); 
      } else {
        console.error('Failed to add item to cart');
      }
    })
    .catch(error => console.error('Error adding item to cart:', error));
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handleAddToCart = () => {
        addToCart(productId, quantity);
  };

  return (
    <div className='product'>
      <h2>{productName}</h2>
      <p>Price: ${price}</p>
      <img src={productimage} alt={productName} className="product-image" />
      <div className="quantity-selector">
        <button onClick={decrementQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>

      <button onClick={handleAddToCart} disabled={addedToCart}>
        {addedToCart ? 'Added' : 'Add to Cart'}
      </button>

      {addedToCart && <p>Added to cart!</p>}
    </div>
  );
};
