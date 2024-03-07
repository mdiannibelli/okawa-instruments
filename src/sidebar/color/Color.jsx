import Input from "../../components/Input";
export default function Color({handleChange}) {
    return (
        <div>
            <h1 className='font-sora text-md font-semibold text-filter border-b-2 pb-2 uppercase'>Color</h1>
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
                name='test3'
                value='Vintage Sunburst'
                title='Vintage Sunburst'
                color='https://images.ctfassets.net/m8onsx4mm13s/5QChjllWMCAA1BwWRKi6El/39c585bfdb4a8be5ac88ecf9a594a484/Vintage_Sunburst__Murphy_Lab_Heavy_Aged.png'
                />
                <Input
                handleChange={handleChange}
                name='test3'
                value='Cherry'
                title='Cherry'
                color='https://images.ctfassets.net/m8onsx4mm13s/5LyRF92YTm9WahIcldyCrg/81a64cb9501ee633cf512767352a6a4b/Cherry_Murphy_Lab_-_NG.JPG'
                />
            </div>
        </div>
    )
}