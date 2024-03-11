import React from 'react'
import { useCart } from '../context/useContext'
export default function Card({product, img, name, price, id}) {
  const {addToCart} = useCart();
  return (
      <div key={id}>
          <div className='p-4 border-2 mb-4 w-auto'>
          <img src={img} className='h-[220px] md:h-[420px] w-auto object-cover flex mx-auto'/>
          </div>
          <h3 className='text-[10px] md:text-sm font-sora font-bold text-pretty'>{name}</h3>
          <div className='flex justify-between items-center mt-3'>
          <p className='font-sora text-xs'>${price}</p>
          <button onClick={() => addToCart(product)} className='bg-secondary hover:bg-primary duration-300 py-1 px-1 md:px-3 md:py-1 text-white font-sora text-[8px] md:text-xs rounded-xl'>Add to Cart</button>
          </div>
      </div>
  )
}
