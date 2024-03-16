import React from 'react'
import { NavLink } from 'react-router-dom'
import ShopByCategory from './ShopByCategory'
import CarrouselWrapper from './CarrouselWrapper'

export default function Home() {
  return (
    <>
    <section>
        <div className='flex justify-center relative max-h-[475px] bg-black -z-10'>
            <img src="https://i.postimg.cc/7YscDjR0/home.jpg" alt="home"  className='hidden md:flex bg-center h-[475px] w-auto object-cover'/>
            <img src="https://i.postimg.cc/wv8ZZJGr/jimmypage.jpg" alt="home"  className='flex md:hidden bg-center h-[475px] w-auto object-cover opacity-40'/>
            <div className='absolute bottom-[20%] md:right-[10%] max-w-lg p-4 md:p-2'>
                <h1 className='text-4xl md:text-6xl uppercase text-white font-black mb-4'>Jimmy Page</h1>
                <h2 className='text-sm md:text-xl uppercase text-white mb-4 font-black'>One of the most iconic guitars in history</h2>
                <p className='text-xs md:text-sm text-white font-medium max-w-md'>Jimmy Page 1969 EDS-1275 Doubleneck Collector's Edition, Signed, Exclusive</p>
                <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-4 flex items-center justify-center mt-8 cursor-pointer'>
                <NavLink to='/store' className='text-md text-white font-semibold uppercase'>Learn more</NavLink>
                </div>
            </div>
        </div>
    </section>
    <ShopByCategory/>
    <CarrouselWrapper/>
  </>
  )
}
