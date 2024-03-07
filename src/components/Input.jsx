import React from 'react'

export default function Input({handleChange, value, name, color, title}) {
  return (
    <label className='categories relative select-none'>
        <input type="checkbox" onChange={handleChange} value={value} name={name} className='absolute cursor-pointer'/>
        <span style={{backgroundImage: `url(${color})`}} className={color ? 'checkmark top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee]' : 'checkmark top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee] border-[2px] border-filter'}></span>
        <span className='font-sora text-filter text-xs ml-6'>{title}</span>
    </label>
  )
}
