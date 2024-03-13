import React from 'react'
import { useCart } from '../../context/useContext'

export default function Detail({data}) {
    const {addToCart} = useCart();
  return (
    <section key={data.id} className='flex justify-center items-center min-h-[100dvh] m-4 flex-col md:flex-row'>
        <div className='flex md:w-[640px] h-[380px] md:h-[640px] justify-center'>
          <img src={data.img} className='object-cover w-auto h-full' />
        </div>
        <div className='flex flex-col gap-y-4 mt-6 md:mt-0 border-2 border-gray-200 rounded-md p-12'>
          <h1 className='text-xl md:text-4xl uppercase max-w-md'>{data.name}</h1>
          <p className='text-xs md:text-sm max-w-md'>{data.description && data.description.length > 200 ? `${data.description.slice(0, 800)}...` : data.description}</p>
          <hr></hr>
          <section className='flex justify-between m-1'>
            <div className='flex flex-col'>
              <span className='text-sm font-semibold'>Finish</span>
              <span className='text-sm'>{data.finish}</span>
              <img src={data.color} alt={data.finish} className='rounded-2xl size-6 mt-4'/>
            </div>
            <div className='flex flex-col'>
              <span className='text-sm font-semibold'>Handedness</span>
              <span className='text-xs text-center  font-semibold w-14 p-2 bg-gray-800 text-white rounded-md'>{data.handedness}</span>
            </div>
          </section>
          <hr />
          <section>
            <h3 className='text-2xl font-semibold'>${data.priceDesc}</h3>
            <button className='font-bold text-xl text-white bg-secondary hover:bg-bgcolor duration-300 mt-2 p-2 w-full uppercase' onClick={() => addToCart(data)}>Add to cart</button>
          </section>
        </div>
    </section>
  )
}
