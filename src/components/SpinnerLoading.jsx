import React from 'react'
import '../styles/spinner.css'

export default function SpinnerLoading() {
  return (
    <div className='flex justify-center '>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
