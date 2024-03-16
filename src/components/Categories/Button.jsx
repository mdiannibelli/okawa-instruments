import React from 'react'

export default function Button({onClickHandler, value, title}) {
  return (
    <div>
        <button onClick={onClickHandler} value={value} className='uppercase text-[10px] md:text-sm rounded-md p-1 md:p-2 border-secondary hover:bg-gray-800 hover:text-gray-300 duration-300'>{title}</button>
    </div>
  )
}
