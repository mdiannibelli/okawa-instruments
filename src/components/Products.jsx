import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Card from './Card.jsx';
import { useCart } from '../context/useContext.jsx';
import Categories from './Categories.jsx';
import Pagination from './Pagination.jsx';
export default function Products() {
  const {result, lastIndex, firstIndex} = useCart();
  return (
    <>
    <Categories/>
    <section className='flex justify-center mt-8 p-8 lg:p-10 xl:px-32'>
      <Sidebar/>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          {result.length > 0 ? 
          (result.map((product)  => (
              <Card key={product.id} id={product.id} img={product.img} name={product.name} price={product.priceDesc} product={product}/>
          ))).slice(firstIndex,lastIndex)
          :
          <span className='flex justify-center col-span-3 text-gray-500 text-6xl'>We could not find the product.</span>
        }
        </div>
    </section>
        <Pagination/>

    </>
  ) 
}
