import NavBar from './components/NavBar';
import ItemDetail from './components/ItemDetail';
import Products from './components/Products';
import { CartProvider } from './context/useContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Products/>}/> 
          <Route path='/products/:id' element={<ItemDetail/>}/>
          {/* <Form/> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
