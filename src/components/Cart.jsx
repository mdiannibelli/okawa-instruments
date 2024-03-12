import React, { useEffect, useState } from 'react'
import { useCart } from '../context/useContext'
import CartDetail from './CartDetail';

export default function Cart() {
    const {cart, deleteProduct, addToCart} = useCart();
    const [items, setItems] = useState([]); 
    const [counter, setCounter] = useState((cart.map(product => product.quantity)));
    const [price, setPrice] = useState((cart.map(product => product.priceDesc)));
    
    useEffect(() => {
        setItems(cart.map(product => ({ // [2500, 5000]
            quantity: product.quantity || 0,
            price: product.priceDesc || 0
        })))
    }, [cart])

    const calculateTotal = () => {
        return items.reduce((total,item) => { // total => acc | arg
            return total + (parseInt(item.price)) * (parseInt(item.quantity));
        }, 0); // start in 0
    }

    const increase = (index) => {    
        const newValue = [...counter];
        newValue[index] += 1;
        setCounter(newValue)
    }
    
    const decrease = (index) => {
        if(counter[index] > 1) {
            const newDecreaseValue = [...counter];
            newDecreaseValue[index] -= 1;
            setCounter(newDecreaseValue)
        }
    }
  return (
    <CartDetail 
    decrease={decrease} 
    increase={increase} 
    calculateTotal={calculateTotal} 
    deleteProduct={deleteProduct}
    counter={counter}
    addToCart={addToCart}
    cart={cart} 
    items={items}/>
  )
}
