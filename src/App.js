import NavBar from './components/NavBar';
import ItemDetail from './components/ItemDetail';
import Products from './components/Products';
import { CartProvider } from './context/useContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/store' element={ <Products/>}/> 
          <Route path='/store/product/:id' element={<ItemDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          {/* <Form/> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
