import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ShopByCategory() {
  return (
    <section className='flex flex-col mt-8 md:max-w-[1024px] mx-auto'>
        <h1 className='text-xl text-center uppercase font-black text-black'>Shop by category</h1>
        <ul className='flex justify-around overflow-hidden mt-10 flex-wrap md:flex-nowrap gap-x-6 p-4 md:p-0 md:gap-x-0'>
            <NavLink to='/store'><li className='flex flex-col justify-center items-center gap-y-2'>
                <img src="https://images.ctfassets.net/m8onsx4mm13s/5NmrLKBgP8wg0v33sooTjT/69f4ed6dec07962b955352c6c9f3a794/sbc-les-paul.png" alt="lespaul" className='w-14 h-24 lg:w-20 lg:h-28'/>
                <span className='text-xs md:text-lg font-medium text-black'>Les Paul</span>
            </li></NavLink>
            <NavLink to='/store'><li className='flex flex-col justify-center items-center gap-y-2'>
                <img src="https://images.ctfassets.net/m8onsx4mm13s/2lIphYhCK96GIn2Vk2a4UC/bfc2d3b943bd12b1c7cd8bbc82abc0d9/sbc-sg.png" alt="sg" className='w-14 h-24 lg:w-20 lg:h-28'/>
                <span className='text-xs md:text-lg font-medium text-black'>SG</span>
            </li></NavLink>
            <NavLink to='/store'><li className='flex flex-col justify-center items-center gap-y-2'>
                <img src="https://i.postimg.cc/NMH0Pm26/stratocaster.png" alt="stratocaster" className='w-14 h-24 lg:w-20 lg:h-28'/>
                <span className='text-xs md:text-lg font-medium text-black'>Stratocaster</span>
            </li></NavLink>
            <NavLink to='/store'><li className='flex flex-col justify-center items-center gap-y-2'>
                <img src="https://i.postimg.cc/25J6w2yj/telecaster.png" alt="telecaster" className='w-14 h-24 lg:w-20 lg:h-28'/>
                <span className='text-xs md:text-lg font-medium text-black'>Telecaster</span>
            </li></NavLink>
            <NavLink to='/store'><li className='flex flex-col justify-center items-center gap-y-2'>
                <img src="https://images.ctfassets.net/m8onsx4mm13s/1lBFZ3MiIxmFsq4TvYCMPP/e3dc59e646091d93cd96944ebaeedd11/sbc-acoustic.png" alt="acoustic" className='w-14 h-24 lg:w-20 lg:h-28'/>
                <span className='text-xs md:text-lg font-medium text-black'>Acoustic</span>
            </li></NavLink>
        </ul>
    </section>
  )
}
