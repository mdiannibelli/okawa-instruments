import Input from "../../components/Input";

export default function Price({handleChange}) {
    return (
        <div>
            <h1 className='font-sora text-md font-semibold text-filter border-b-2 pb-2 uppercase'>Price</h1>
            <div className='items-center mt-4 mb-2'>
                <label className='categories relative select-none'>
                    <input type="checkbox" onChange={handleChange} value='' name='test2' className='absolute cursor-pointer'/>
                    <span className='checkmark top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee] border-[2px] border-filter'></span>
                    <span className='font-sora text-filter text-xs ml-6'>All</span>
                </label>

            </div>
            <div className='flex flex-col gap-y-2 mt-2'>
                <Input
                handleChange={handleChange}
                value={2500}
                title="1.000 USD - 2.500"
                name="test2"
                />
                <Input
                handleChange={handleChange}
                value={5000}
                title="2.500 USD - 5.000"
                name="test2"
                />
                <Input
                handleChange={handleChange}
                value={8000}
                title="5.000 USD - 8.000"
                name="test2"
                />
                <Input
                handleChange={handleChange}
                value={10000}
                title="Over 10.000 USD"
                name="test2"
                />
            </div>
        </div>
    )
}