import Disponibilidad from './disponibilidad/Disponibilidad'
import Category from './category/Category'
import Price from './price/Price'
import Color from './color/Color'
import Handedness from './handedness/Handedness'

export default function Sidebar({guitars, handleChange}) {
    return (
    <section className='mt-4 mr-4 p-2 md:mr-14 md:p-12 gap-y-8 hidden md:flex flex-col border-r-[2px] w-[360px]'>
        <div>
        <h1 className='font-sora uppercase text-xl font-semibold'>Filters</h1>
        </div>
        <Disponibilidad guitars={guitars}/>
        <Category guitars={guitars} handleChange={handleChange}/>
        <Price guitars={guitars} handleChange={handleChange}/>
        <Handedness guitars={guitars} handleChange={handleChange}/>
        <Color guitars={guitars} handleChange={handleChange}/>
    </section>

    )
}