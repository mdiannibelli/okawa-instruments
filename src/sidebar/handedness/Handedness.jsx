import Input from "../../components/Input";
export default function Handednnes({handleChange}) {
    return (
        <div>
            <h1 className='font-sora text-md font-semibold text-filter border-b-2 pb-2 uppercase'>Handedness</h1>
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
                name='Right'
                title='Right'
                value='test4'
                />
                <Input
                handleChange={handleChange}
                name='Left'
                title='Left'
                value='test4'
                />
            </div>
        </div>
    )
}