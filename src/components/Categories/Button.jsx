import React from 'react'

export default function Button({onClickHandler, value, title}) {
  return (
    <div>
        <button onClick={onClickHandler} value={value} className='uppercase text-[8px] md:text-sm rounded-md hover:bg-gray-700 p-1 md:p-2 border-secondary hover:bg-gray-800 hover:text-gray-300 duration-300'>{title}</button>
    </div>
  )
}
