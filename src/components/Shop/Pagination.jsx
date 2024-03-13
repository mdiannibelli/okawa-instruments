import React, { useState } from 'react'
import { useCart } from '../../context/useContext'

export default function Pagination() {
    const {productsPerPage, currentPage, setCurrentPage, result} = useCart();
    const totalProducts = result.length;
    
    //console.log(Math.ceil(totalProducts / productsPerPage))
    
    const pageNumbers = [];
    for(let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const previousPage = () => {
        setCurrentPage(currentPage - 1)
        window.scrollTo({
            top:0,
            behavior: 'instant'
        })
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        window.scrollTo({
            top:0,
            behavior: 'instant'
        })
    }

    const onSpecificPage = (p) => {
        setCurrentPage(p)
        window.scrollTo({
            top:0,
            behavior: 'instant'
        })
    }

  return (
    <nav className='flex justify-center items-center p-8 my-20 gap-x-6'>
        <a onClick={previousPage} className={` ${currentPage === 1 ? 'is-disabled' : ''}  text-white md:text-2xl bg-secondary hover:bg-bgcolor hover:duration-300 p-1 md:px-4 md:py-2 cursor-pointer select-none`}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" /></svg></a>
        {pageNumbers.map((page) => (
            <li className='list-none' key={page}>
                <a onClick={() => onSpecificPage(page)} 
                className={`${page === currentPage ? 'is-current' : ''}  text-white text-lg md:text-2xl bg-secondary hover:bg-bgcolor duration-300 px-4 py-2 cursor-pointer select-none`}>{page}</a>
            </li>
        ))}
        <a onClick={nextPage} className={` ${currentPage === 3 ? 'is-disabled' : ''}  text-white md:text-2xl bg-secondary hover:bg-bgcolor hover:duration-300 p-1 md:px-4 md:py-2 cursor-pointer select-none`}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-6l4 5l-4 5h6l4 -5z" /></svg></a>
    </nav>
  )
}
