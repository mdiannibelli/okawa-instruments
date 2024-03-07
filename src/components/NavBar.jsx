import React, { useRef, useState } from 'react'
import CartIcon from './icons/CartIcon'
export default function NavBar({cart, id}) {
    const [icon, setIcon] = useState('menu')
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIcon(!isOpen ? 'close' :'menu')
    } 
  return (
    <section className='bg-bgcolor'>
        <div className='flex justify-evenly items-center bg-[linear-gradient(90deg,rgba(0,0,0,.84),rgba(65,14,14,0.92)),url(../public/imgs/nav-img.jpg)] bg-cover bg-center'>
        <header>
            <a href='/'><img className='size-24 md:w-36 h-full object-cover' src="/okawa-instruments.png" alt="Okawa Instruments Logo" /></a>
        </header>
        <button onClick={toggleMenu} className={`flex md:hidden left-[22px] z-10 absolute`}><ion-icon name={icon}></ion-icon></button>
       
            <div className={` ${isOpen ? 'left-0' : 'left-[-100%]'}
            flex-col flex md:flex-row gap-x-8 gap-y-12 absolute md:static top-0 bg-responsive md:bg-none h-full w-[25dvh] md:w-auto transition-all duration-500`}>
            <nav className='flex flex-col md:flex-row gap-x-8 mr-24 md:items-center absolute md:static left-6 top-20 gap-y-8 justify-center'>
                <a href='/'><img className='size-32 flex md:hidden relative right-4 h-full object-cover' src="/okawa-instruments.png" alt="Okawa Instruments Logo" /></a>
                <a className='text-white hover:text-primary duration-500 text-2xl font-light uppercase' href="/">Inicio</a>
                <a className='text-white hover:text-primary duration-500 text-2xl font-light uppercase' href="/tienda">Tienda</a>
                <a className='text-white hover:text-primary duration-500 text-2xl font-light uppercase' href="/nosotros">Nosotros</a>
                <a className='text-white hover:text-primary duration-500 text-2xl font-light uppercase' href="/blog">Blog</a>
            </nav>
            </div>
            <CartIcon cart={cart} id={id}/>
       
        </div>
    </section>
  )
}
