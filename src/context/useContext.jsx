import React, {useContext, createContext, useState, useEffect} from 'react'
/* import guitarsProducts from '../db/data'; */
import firebaseProducts from '../hooks/useFirebase';

const CartContext = createContext();

const productsFromlocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export const CartProvider = ({children}) => {
  // firebase products 
  const {data} = firebaseProducts()
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState(productsFromlocalStorage);
  
  //pagination
  const lastIndex = currentPage * productsPerPage // 12
  const firstIndex = lastIndex - productsPerPage // 0

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  const filteredItems = data.filter((guitar) => guitar.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  /* const filteredItems = guitarsProducts.filter((guitar) => guitar.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) <== data.js render importing /db/data */

  const addToCart = (guitar) => {
    const existInCart = cart.find(x => x.id === guitar.id)
    if(existInCart) {
      const updatedCart = cart.map(x => {
        if(x.id === guitar.id) {
          return {...x, quantity: x.quantity + 1}
        } else {
          return x;
        }
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, {...guitar, quantity: 1}])
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

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  }

  const handleClick = (e) => {
    setSelected(e.target.value)
  }

  const filteredData = (data, selected, query) => {
    let products = data;
    if(query) {
      products = filteredItems;
    }

    if(selected) {
      products = products.filter(({category, color, price, handedness, partner}) =>
        category === selected ||
        price === selected || 
        color === selected ||
        partner === selected ||
        handedness === selected 
    )
  }
  return products.map(({name, price, priceDesc, img,id, color, handedness}) => ({
    id,
    name,
    price,
    priceDesc,
    img,
    color, 
    handedness
  }));
}
const result = filteredData(data, selected, query);
  return (
    <CartContext.Provider
    value={{
        result,
        filteredItems,
        cart,
        selected,
        addToCart,
        deleteCart,
        deleteProduct,
        handleChange,
        handleClick,
        handleInputChange,
        filteredData,
        productsPerPage,
        currentPage,
        setCurrentPage,
        firstIndex,
        lastIndex
    }}
    >
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)