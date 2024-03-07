import React from 'react'
export default function Card({product, id, addToCart}) {
  return (
    <div key={id}>
        <div className='p-4 border-2 mb-4 w-auto'>
        <img src={product.img} className='h-[460px] object-cover flex mx-auto'/>
        </div>
        <h3 className='text-sm font-sora font-bold text-pretty'>{product.name}</h3>
        <div className='flex justify-between items-center mt-3'>
        <p className='font-sora text-xs'>${product.price}</p>
        <button onClick={() => addToCart(product)} className='bg-secondary hover:bg-primary duration-300 px-3 py-1 text-white font-sora text-xs rounded-xl'>Add to Cart</button>
        </div>
    </div>
  )
}
