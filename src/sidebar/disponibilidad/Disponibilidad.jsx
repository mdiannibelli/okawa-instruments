import { useCart } from '../../context/useContext'
import useFirebase from '../../hooks/useFirebase'
export default function Disponibilidad() {
    const {filteredItems, handleChange} = useCart()

    // firebase
    const data = useFirebase();
    return (
        <div>
            <h1 className='font-sora text-md font-semibold text-filter border-b-2 pb-2 uppercase'>Stock</h1>
            <div className='items-center mt-4'>
            <label className='categories cursor-pointer relative select-none'>
                    <input type="radio" onChange={handleChange} value='' name='stock' className='absolute cursor-pointer'/>
                    <span className='checkmark top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee] border-[2px] border-filter'></span>
                    <span className='font-sora text-filter text-xs ml-6'>In stock ({data.length}) </span>
                </label>
            </div>
       
        </div>
    )
}