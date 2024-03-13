import React, { useState } from 'react'
import {useFormik} from 'formik'

export default function Checkout() {
    const [buyer, setBuyer] = useState([])
    console.log(buyer)
    const validate = values => {
        const errors = {};
        if(!values.fullname) {
            errors.fullname = 'Field Required'
        } else if (values.fullname.length > 34 || values.fullname.length < 10) {
            errors.fullname = 'Enter a valid full name'
        }
        if(!values.email) {
            errors.email = 'Field Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Enter a valid email'
        }
        if(!values.dni) {
            errors.dni = 'Field Required'
        } else if (values.dni.length !== 8 || (isNaN(values.dni))) {
            errors.dni = 'Enter a valid DNI'
        }
        if(!values.phone) {
            errors.phone = 'Field Required'
        } else if (values.phone.length > 13 || values.phone.length < 10 || (isNaN(values.phone))) {
            errors.phone = 'Enter a valid number'
        }
        if(!values.country) {
            errors.country = 'Field Required'
        }
        if(!values.adress) {
            errors.adress = 'Field Required'
        }
        if(!values.city) {
            errors.city = 'Field Required'
        }
        if(!values.zip) {
            errors.zip = 'Field Required'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            dni: '',
            phone: '',
            country: '',
            adress: '',
            city: '',
            zip: ''
        },
        validate,
        onSubmit: values => {
            formik.resetForm(values);
            setBuyer(values)
            //console.log(values)
        }
    })
  return (
    <div className='flex flex-col items-center min-h-[100dvh] mt-12 mb-8'>
        <h1 className='text-4xl text-primary font-thin uppercase mb-12'>Complete with your information</h1>
        <form onSubmit={formik.handleSubmit} className='w-[480px] flex flex-col gap-y-4'>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>Full Name</label>
            <input value={formik.values.fullname} onChange={formik.handleChange} name='fullname' type='text' placeholder='Full Name' className='outline-none border-[1px] border-gray-300 rounded-md  px-4 py-2'/>
            {formik.errors.fullname ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.fullname}</span> : null}
            </div>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>Email Adress</label>
            <input value={formik.values.email} onChange={formik.handleChange} name='email' type='email' placeholder='Email Adress' className='outline-none border-[1px] border-gray-300 rounded-md  px-4 py-2'/>
            {formik.errors.email ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.email}</span> : null}
            </div>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>DNI</label>
            <input value={formik.values.dni} onChange={formik.handleChange} name='dni' type='text' placeholder='DNI' className='outline-none border-[1px] border-gray-300 rounded-md px-4 py-2'/>
            {formik.errors.dni ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.dni}</span> : null}
            </div>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>Phone Number</label>
            <input value={formik.values.phone} onChange={formik.handleChange} name='phone' type='text' placeholder='Phone Number' className='outline-none border-[1px] border-gray-300 rounded-md  px-4 py-2'/>
            {formik.errors.phone ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.phone}</span> : null}
            </div>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>Country</label>
            <input value={formik.values.country} onChange={formik.handleChange} name='country' type='text' placeholder='Country' className='outline-none border-[1px] border-gray-300 rounded-md  px-4 py-2'/>
            {formik.errors.country ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.country}</span> : null}
            </div>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>Adress</label>
            <input value={formik.values.adress} onChange={formik.handleChange} name='adress' type='text' placeholder='Adress' className='outline-none border-[1px] border-gray-300 rounded-md  px-4 py-2'/>
            {formik.errors.adress ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.adress}</span> : null}
            </div>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>City</label>
            <input value={formik.values.city} onChange={formik.handleChange} name='city' type='text' placeholder='City' className='outline-none border-[1px] border-gray-300 rounded-md  px-4 py-2'/>
            {formik.errors.city ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.city}</span> : null}
            </div>
            <div className='flex flex-col w-full'>
            <label className='font-thin text-lg mb-1'>Zip/Postal Code</label>
            <input value={formik.values.zip} onChange={formik.handleChange} name='zip' type='number' placeholder='Zip/postal code' className='outline-none  border-[1px] border-gray-300 rounded-md  px-4 py-2'/>
            {formik.errors.zip ? <span className='text-sm ml-1 mt-1 font-regular text-red-500'>{formik.errors.zip}</span> : null}
            </div>
            <button className='bg-secondary hover:bg-primary duration-300 text-white text-xl py-2 rounded-xl mt-2' type='submit'>Send</button>
        </form>
    </div>
  )
}
