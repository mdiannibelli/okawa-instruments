import NavBar from './components/Navbar/NavBar';
import ItemDetail from './components/Shop/ItemDetail';
import Products from './components/Shop/Products';
import { CartProvider } from './context/useContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Shop/Cart';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/store' element={ <Products/>}/> 
          <Route path='/store/product/:id' element={<ItemDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/contact' element= {<Form/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
