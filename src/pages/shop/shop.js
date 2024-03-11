import React, { useState, useEffect } from 'react';
import { Product } from './product.js';

export const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:3000/api/fetch_products.php')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setProducts([]); // Set products to an empty array in case of an error
      });
  }, []);

  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Syed Suhaib Hussain - 8927037 - Assignment2</h1>
        </div>
        <div className='products'>
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
        </div>
    </div>
  );
};
