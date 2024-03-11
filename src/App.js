import Categories from './components/Categories';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { CartProvider } from './context/useContext';

function App() {


  return (
    <CartProvider>
      <NavBar/>
      <Categories/>
      {/* <Form/> */}
      <Products/>
    </CartProvider>
  );
}

export default App;
