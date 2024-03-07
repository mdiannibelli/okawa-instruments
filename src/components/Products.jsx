import React, { useState } from 'react'
import guitarsProducts from '../db/data.js';
import Sidebar from '../sidebar/Sidebar'
import Card from './Card.jsx';
export default function Products({addToCart, guitars, handleChange}) {

  return (
    <section className='flex justify-center mt-8 p-8 lg:p-10 xl:px-32 mt-24'>
      <Sidebar guitars={guitars} handleChange={handleChange}/>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
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
