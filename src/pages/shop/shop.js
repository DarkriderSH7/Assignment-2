import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product.js';

export const Shop = ({ addToCart }) => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Assignment1</h1>
        </div>
        <div className='products'>
        {PRODUCTS.map((product) => (
    <Product key={product.id} data={product} addToCart={addToCart} />
  ))}
        </div>
    </div>
  );
};
