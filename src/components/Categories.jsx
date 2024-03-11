import React from 'react'
import { useCart } from '../context/useContext'
import Button from './Button';

export default function Categories() {
    const {handleClick} = useCart();
  return (
    <div className='flex flex-col justify-center items-center mt-12 gap-y-4 md:gap-y-8'>
        <div>
        <h2 className='font-sora text-2xl md:text-3xl uppercase text-gray-500'>Select your brand</h2>
        </div>
        <div className='flex gap-x-2 md:gap-x-8 text-sm md:text-xl'>
        <Button onClickHandler={handleClick} value='' title='All brands'></Button>
        <Button onClickHandler={handleClick} value="Fender" title='Fender'></Button>
        <Button onClickHandler={handleClick} value="Gibson" title='Gibson'></Button>
        <Button onClickHandler={handleClick} value="Chapman" title='Chapman'></Button>
        </div>
    </div>
  )
}
