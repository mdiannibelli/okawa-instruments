import { useCart } from "../context/useContext"

export default function CartDetails() {
  const {cart, deleteCart, deleteProduct} = useCart();
  console.log(cart)
  return ( 
    <div className='absolute right-0 top-36 bg-bgcolor z-10'>
        {cart.map(product => (
            <div key={product.id} className='flex justify-center items-center p-4'>
                <img className='w-[120px] h-full mr-4' src={product.img} alt={product.name}/>
                <div>
                <h4 className='font-sora text-white text-[10px] text-pretty md:text-xs w-auto md:w-[240px]'>{product.name}</h4>
                <span className='flex items-center gap-x-2 mt-1'>
                <img className='size-4' src={product.color} alt={product.finish} />
                <h5 className='font-sora text-white text-xs'>{product.finish}</h5>
                </span>
                <h5 className='font-sora text-white text-xs mt-1'>{product.handedness} hand</h5>
                <span className='font-sora text-white text-xs'>{product.priceDesc}</span>
                <div>
                <span className='font-sora text-white text-xs'>Quantity:</span>
                <div className='flex gap-x-2'>
                <span className='w-20 block text-center bg-primary text-bgcolor focus:outline-none'>{product.quantity}</span>
                <button onClick={() => deleteProduct(product.id)} className='text-white text-[10px] font-sora'>Delete</button>
                </div>
                </div>
                </div>
            </div>
        ))}
        <div className='flex justify-end items-center'>
        {cart.length < 1 ? '' : <a href='#' className='rounded-xl bg-gray-500 hover:bg-gray-700 duration-300 text-white py-1 px-3 m-4'>Checkout</a>}
        {cart.length < 1 ? '' : <button onClick={deleteCart} className='rounded-xl bg-primary hover:bg-red-700 duration-300 text-white py-1 px-3 m-4'>Delete Cart</button>}
        </div>
    </div>
  )
}
