import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import guitarsProducts from '../src/db/data';
import Products from './components/Products';
import Form from './components/Form'

function App() {
  const [guitars, setGuitars] = useState(guitarsProducts);
  const [cart, setCart] = useState([]);
  const[selected, setSelected] = useState(null)

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

  const deleteCart = () => {
    setCart([]);
  }

  const deleteProduct = (id) => {
    /* setCart(cart.filter((product) => product.id !== id)); */
    setCart((cart) => {
      const productToDelete = cart.find((product) => product.id === id);
      if(productToDelete && productToDelete.quantity > 1) {
         return cart.map((product) => {
          if(product.id === id) {
            return {...product, quantity: product.quantity - 1}
          } else {
            return product
          }
        })
      } else {
        return cart.filter((product) => product.id !== id)
      }
    })
  }

  const handleChange = (e) => {
    setSelected(e.target.value);
  }


  return (
    <>
    <NavBar cart={cart} id={guitars.id} deleteCart={deleteCart} deleteProduct={deleteProduct} handleChange={handleChange}/>
    <Form/>
    <Products
    handleChange={handleChange}
    guitars={guitars}
    id={guitars.id}
    addToCart={addToCart}/>
    </>
  );
}

export default App;
