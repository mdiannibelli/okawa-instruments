import Sidebar from '../../sidebar/Sidebar.jsx'
import Card from './Card.jsx';
import { useCart } from '../../context/useContext.jsx';
import Categories from '../Categories/Categories.jsx';
import Pagination from './Pagination.jsx';
import Searcher from '../Searcher.jsx';
import useFirebase from '../../hooks/useFirebase.jsx'
import SpinnerLoading from '../SpinnerLoading.jsx';
export default function Products() {
  const {result, lastIndex, firstIndex} = useCart();
  const {loading,data} = useFirebase();
  return (
  <main>
    <Searcher/>
    <Categories/>
    <section className='flex justify-center mt-8 p-8 lg:p-10 xl:px-32'>
      <Sidebar/>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          {loading ? <SpinnerLoading/> :
          (result.map((product, index)  => (
              <Card key={index} img={product.img} name={product.name} price={product.priceDesc} product={product}/>
          ))).slice(firstIndex,lastIndex)
           
         // <span className='flex justify-center col-span-3 text-gray-500 text-6xl'>We could not find the product.</span>
        }
        </div>
    </section>
        <Pagination/>
  </main>
  ) 
}
