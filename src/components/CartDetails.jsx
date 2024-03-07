import React, {useState} from 'react'

export default function CartDetails({cart}) {
  return ( 
    <div className='absolute right-0 top-24 bg-bgcolor'>
        {cart.map(product => (
            <div key={product.id} className='flex justify-center items-center p-4'>
                <img className='w-32' src={product.img} alt={product.name}/>
                <div>
                <h4 className='font-sora text-white text-xs w-[240px]'>{product.name}</h4>
                <span className='flex items-center gap-x-2 mt-1'>
                <img className='size-4' src={product.color} alt={product.finish} />
                <h5 className='font-sora text-white text-xs'>{product.finish}</h5>
                </span>
                <h5 className='font-sora text-white text-xs mt-1'>{product.handedness} hand</h5>
                <span className='font-sora text-white text-xs'>{product.price}</span>
                <div>
                <span className='font-sora text-white text-xs'>Quantity:</span>
                <input type="text" className='w-20 block text-center bg-primary text-bgcolor focus:outline-none' value={product.quantity} />
                </div>
                </div>
            </div>
        ))}
    </div>
  )
}
