import React from 'react'
import { NavLink } from 'react-router-dom';

export default function CartDetail({cart, increase, decrease,addToCart, deleteProduct, counter, calculateTotal}) {
  return (
    <div className='min-h-[100dvh] grid md:grid-cols-[500px_minmax(50px,_200px)] lg:grid-cols-[600px_minmax(50px,_300px)] justify-items-center justify-center'>
    <section className='flex flex-col items-center gap-y-8 mt-8 mb-8 '>
        <h1 className='text-xl md:text-4xl text-center uppercase text-gray-500 m-4'>Shopping Cart</h1>
        {cart.length > 0 ?
        (cart.map((product, index) => (
            <div key={product.id} className='flex p-4 md:p-0 items-center gap-x-8'>
                <div className='border-2 border-gray-200 p-2 rounded-md'>
                    <img src={product.img} alt={product.name} className='h-[200px] w-[400px] md:h-[160px] md:w-24 object-cover'/>
                </div>
           
                <div className='flex flex-col'>
                    <h2 className='text-[10px] md:text-sm uppercase font-bold max-w-[180px] md:max-w-[260px] lg:max-w-[320px] mb-2 mt-8'>{product.name}</h2>
                    <span className='text-sm'>${product.priceDesc}</span>
                    <div>
                        <div className='mt-12 flex flex-col md:flex-row gap-2 m-4'>
                            <div className='flex'>
                            <button type='button' onClick={() => (decrease(index), deleteProduct(product.id))} className='text-white px-3 h-6 my-auto bg-secondary hover:bg-primary duration-300 rounded-md'>-</button>
                            <h4 className='outline-none text-gray-500 w-16 text-center border-2 border-gray-300 rounded-md'>{counter[index]}</h4>
                            <button type='button' onClick={() => (increase(index), addToCart(product))} className='text-white px-3 h-6 my-auto bg-secondary hover:bg-primary duration-300 rounded-md'>+</button>
                            </div>
                            <button onClick={() => (deleteProduct(product.id), decrease(index))} className='ml-2 rounded-md border-secondary text-xs px-2 text-gray-600 hover:bg-gray-700 hover:text-white duration-300'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )))
        : <h1 className=' text-xl uppercase text-gray-500 m-4'>Cart Empty</h1>}
    </section>
        <section className='flex justify-end mt-12'>
        <hr className='border-[0.10px] mr-4 max-h-48 h-full border-gray-500'/>
            <div className='p-4'>
                <div className='flex justify-between'>
                <h1 className='text-md font-semibold'>Total</h1>
                <h1 className='text-md font-semibold'>${calculateTotal().toLocaleString()} USD</h1>

                </div>
                <p className='text-sm mt-2'>This order is in USD. Applicable taxes, shipping, coupons or special offers will be applied at Checkout.</p>
                <NavLink to='/checkout'><button className='font-bold text-lg text-white bg-secondary hover:bg-bgcolor duration-300 mt-4 py-1 w-full uppercase'>Checkout</button></NavLink>
            </div>
        </section>
    </div>
  )
}
