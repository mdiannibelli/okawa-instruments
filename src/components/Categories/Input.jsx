import React from 'react'
import '../../styles/input.css'
import { useCart } from '../../context/useContext'
export default function Input({value, name, color, title}) {
  const {handleChange} = useCart();
  return (
    <label className='categories block cursor-pointer relative select-none'>
        <input type="radio" onChange={handleChange} name={name} value={value} className='absolute cursor-pointer'/>
        <span style={{backgroundImage: `url(${color})`}} className={color ? 'checkmark cursor-pointer top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee]' : 'checkmark cursor-pointer top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee] border-[2px] border-filter'}></span>
        <span className='text-filter text-xs ml-6'>{title}</span>
    </label>
  )
}
