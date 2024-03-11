import Input from "../../components/Input";
import { useCart } from "../../context/useContext";
export default function Handednnes() {
    const {handleChange} = useCart();
    return (
        <div>
            <h1 className='font-sora text-md font-semibold text-filter border-b-2 pb-2 uppercase'>Handedness</h1>
            <div className='items-center mt-4 mb-2'>
                <label className='categories cursor-pointer relative select-none'>
                    <input type="radio" onChange={handleChange} value='' name='test3' className='absolute cursor-pointer'/>
                    <span className='checkmark top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee] border-[2px] border-filter'></span>
                    <span className='font-sora text-filter text-xs ml-6'>All</span>
                </label>

            </div>
            <div className='flex flex-col gap-y-2 mt-2'>
                <Input
                title='Left'
                value='Left'
                name='test3'
                />
                <Input
                title='Right'
                value='Right'
                name='test3'
                />
            </div>
        </div>
    )
}