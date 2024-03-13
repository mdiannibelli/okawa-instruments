
export default function InputForm({type,name, label, value, handleChange, handleBlur}){
    return (
        <div className='flex flex-col p-4 justify-center items-center mt-8'>
            <label className='block mb-2 bg-secondary font-sora text-md text-white p-3 font-[600] w-full'>{label}</label>
            <input type={type} placeholder={label} value={value} name={name} onChange={handleChange} onBlur={handleBlur} className='outline-none w-full border-box font-sora text-sm p-3 border border-[rgb(34,34,34,0,0.15)] rounded-md' />
        </div>
    )
}