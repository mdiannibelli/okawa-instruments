import React, { useState } from 'react'
import guitarsProducts from '../db/data.js';
import Card from './Card.jsx';
export default function Products({addToCart}) {

  return (
    <section className='flex justify-center items-center mt-8 p-4 lg:p-8 xl:p-24'>
        <div className='grid grid-cols-4 gap-8'>
        {guitarsProducts.map((product) => (
            <Card 
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
        </div>
    </section>
  ) 
}
