import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-evenly flex-col md:flex-row items-center bg-[#010101] pt-8 pb-20 px-4'>
        <div>
            <img src='./okawa-instruments.png' alt='logo' className='md:w-52 lg:size-36 xl:size-52'/>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap gap-4 md:gap-14 justify-center lg:gap-x-8 xl:gap-x-24'>
        <nav className='flex flex-col text-white gap-y-1'>
            <hr className='mb-4 border-2 w-32 border-gray-500'/>
            <h3 className='text-sm xl:text-lg font-black uppercase mb-2'>Guitars</h3>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Fender</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Gibson</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Chapman</a>
        </nav>
        <nav className='flex flex-col text-white gap-y-1'>
            <hr className='mb-4 border-2 w-32 border-gray-500'/>
            <h3 className='text-sm xl:text-lg font-black uppercase mb-2'>Models</h3>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Stratocaster</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Telecaster</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Les Paul</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>SG</a>
        </nav>
        <nav className='flex flex-col text-white gap-y-1'>
            <hr className='mb-4 border-2 w-32 border-gray-500'/>
            <h3 className='text-sm xl:text-lg font-black uppercase mb-2'>Company</h3>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>About</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Contact Us</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Careers</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Newsroom</a>
        </nav>
        <nav className='flex flex-col text-white gap-y-1'>
            <hr className='mb-4 border-2 w-32 border-gray-500'/>
            <h3 className='text-sm xl:text-lg font-black uppercase mb-2'>More About Okawa</h3>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>¿Why buy Okawa?</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Find your Okawa</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Student Discount</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Receive Offers</a>
        </nav>
        <nav className='flex flex-col text-white gap-y-1'>
            <hr className='mb-4 border-2 w-32 border-gray-500'/>
            <h3 className='text-sm xl:text-lg font-black uppercase mb-2'>Customer Service</h3>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Support</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Serial Number Lookup</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Find a Dealer</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Store Policy</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Shipping Info</a>
            <a className='text-xs lg:text-md text-gray-400 hover:text-white duration-300 cursor-pointer'>Manuals</a>
        </nav>
        </div>
    </footer>
  )
}
