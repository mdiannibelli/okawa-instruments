import { useParams, useNavigate, NavLink} from 'react-router-dom';
import { useCart } from '../../context/useContext'
export default function Card({product, img, name, price}) {
  const {addToCart} = useCart();
  const {id} = useParams();
  const navegate = useNavigate();
  return (
      <div key={id}>
          <div className='p-4 border-2 mb-4 w-auto flex justify-center'>
          <button onClick={() => navegate(`/store/product/${product.id}`)}><img src={img} className='h-[220px] md:h-[420px] w-auto object-cover flex mx-auto'/></button>
          </div>
          <NavLink to={`/store/product/${product.id}`}><h3 className='text-[10px] md:text-sm font-bold text-pretty'>{name}</h3></NavLink>
          <div className='flex justify-between items-center mt-3'>
          <p className='text-sm font-medium'>${price}</p>
          <button onClick={() => addToCart(product)} className='bg-secondary hover:bg-primary duration-300 py-1 px-1 md:px-3 md:py-1 text-white text-[8px] font-black md:text-xs rounded-xl'>Add to Cart</button>
          </div>
      </div>
  )
}
