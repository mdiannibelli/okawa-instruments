import { useCart } from "../../context/useContext"

export default function Searcher() {
    const {handleInputChange} = useCart();
    return (
        <div className='flex justify-center items-center py-2'>
            <span className="text-gray-500 relative left-8"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></span>
            <input onChange={handleInputChange} type='text' name='search' id='search' placeholder='Search' className='block w-[600px] py-2 m-1 rounded-sm bg-gray-200 indent-8 focus:outline-none text-gray-500 font-sora text-md'/>
        </div>
    )
}