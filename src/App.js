import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import guitarsProducts from '../src/db/data';
import Products from './components/Products';

function App() {
  const [guitars, setGuitars] = useState(guitarsProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existInCart = cart.find(x => x.id === product.id)
    if(existInCart) {
      const updatedCart = cart.map(x => {
        if(x.id === product.id) {
          return {...x, quantity: x.quantity + 1}
        } else {
          return x;
        }
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }
  /* console.log(cart) */

  /* FUNCION REMOVER ELEMENTO POR ID */
  return (
    <>
    <NavBar cart={cart} id={guitars.id}/>
    <Products
    guitars={guitars}
    id={guitars.id}
    addToCart={addToCart}/>
    </>
  );
}

export default App;
