import React, {useState } from 'react'
import CartIcon from '../icons/CartIcon'
import Searcher from './Searcher'
import { NavLink } from 'react-router-dom';
export default function NavBar() {
    const [icon, setIcon] = useState('menu')
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIcon(!isOpen ? 'close' :'menu')
    } 
  return (
    <section className='bg-bgcolor'>
        <div className='flex justify-center md:justify-evenly items-center bg-[linear-gradient(90deg,rgba(0,0,0,.84),rgba(65,14,14,0.92)),url(../public/imgs/nav-img.jpg)] bg-cover bg-center'>
        <header>
            <a href='/'><img className='size-24 md:w-36 h-full object-cover' src="/okawa-instruments.png" alt="Okawa Instruments Logo" /></a>
        </header>
        <button onClick={toggleMenu} className={`flex md:hidden left-[22px] z-10 absolute`}><ion-icon name={icon}></ion-icon></button>
       
            <div className={` ${isOpen ? 'left-0' : 'left-[-100%]'}
            flex-col flex md:flex-row gap-x-8 gap-y-12 absolute md:static top-0 bg-responsive md:bg-none h-full w-[25dvh] md:w-auto transition-all duration-500`}>
            <nav className='flex flex-col w-36 md:w-auto md:flex-row gap-x-8 mr-24 md:items-center absolute md:static left-6 top-20 gap-y-8 justify-center'>
                <NavLink to='/'><img className='size-32 flex md:hidden relative right-4 h-full object-cover' src="/okawa-instruments.png" alt="Okawa Instruments Logo" /></NavLink>
                <NavLink to='/' className='text-white hover:text-primary duration-500 text-xl font-bold  uppercase'>Inicio</NavLink>
                <NavLink to='/store' className='text-white hover:text-primary duration-500 text-xl font-bold uppercase'>Store</NavLink>
                <NavLink to='/about-us' className='text-white hover:text-primary duration-500 text-xl font-bold uppercase'>About Us</NavLink>
                <NavLink to='/blog' className='text-white hover:text-primary duration-500 text-xl font-bold uppercase'>Blog</NavLink>
                <NavLink to='/contact' className='text-white hover:text-primary duration-500 text-xl font-bold uppercase'>Contact</NavLink>
            </nav>
            </div>
            <CartIcon/>
       
        </div>
        <Searcher/>
    </section>
  )
}