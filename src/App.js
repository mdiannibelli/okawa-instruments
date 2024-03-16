import NavBar from './components/Navbar/NavBar';
import ItemDetail from './components/Shop/ItemDetail';
import Products from './components/Shop/Products';
import { CartProvider } from './context/useContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Shop/Cart';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={ <Products/>}/> 
          <Route path='/store/product/:id' element={<ItemDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact' element= {<Form/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
