import React, { useEffect, useState } from 'react'
import useFormulario from '../../hooks/useFormulario'
import InputForm from './InputForm'
import Container from '../Container'
export default function Form() {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const initial = {
        name: '',
        lastName: '',
        email: '',
        msg: '',
    }
    const validateForm = (form) => {
        const errors = {};
        if(!form.name){
            errors.name = 'Name is required'
        } else if (form.name.length > 16) {
            errors.name = 'Please, enter a valid name'
        }
        if(!form.lastName) {
            errors.lastName = 'Last name is required'
        } else if (form.lastName.length > 16) {
            errors.lastName = 'Please, enter a valid last name'
        }

        if(!form.email) {
            errors.email = 'Email is required'
        } else if (!regexEmail.test(form.email)) {
            errors.email = 'Please, enter a valid email'
        }

        if(!form.msg){
            errors.msg = 'A message is required'
        }
        return errors;

    }

    const [showSpan, setShowSpan] = useState(true)
    const [resultados, setResultados] = useState([]);
    const [form, handleChange, handleBlur, reset, errors] = useFormulario(initial, validateForm);

    const onSubmit = (e) => {
        e.preventDefault();
        if(errors.msg || errors.lastName || errors.name || errors.email || form.name === '' || form.email === '' || form.msg === '' || form.lastName === '') {
            return undefined;
        } else {
            setResultados([
                ...resultados,
                form,  
            ])
            setShowSpan(true)
            reset()

        }
        
    }
    // console.log(resultados)

    useEffect(() => {
        if(showSpan) {
            const time = setTimeout(() => {
                setShowSpan(false)
            },5000)
            // desmontar componente
            return () => clearTimeout(time)
        }
    },[resultados])

  return (
    <Container>
    <form onSubmit={onSubmit}>
        <InputForm 
        handleChange={handleChange} 
        handleBlur = {handleBlur}
        value={form.name} 
        name='name' 
        label='Name'
        type='text'
        />
        {errors.name ? <span className='font-sora text-primary font-xl flex justify-center'>{errors.name}</span> : null}
        <InputForm 
        handleChange={handleChange} 
        handleBlur = {handleBlur}
        value={form.lastName} 
        name='lastName' 
        label='Last Name'
        type='text'
        />
        {errors.lastName ? <span className='font-sora text-primary font-xl flex justify-center'>{errors.lastName}</span> : null}
        <InputForm 
        handleChange={handleChange} 
        handleBlur = {handleBlur}
        value={form.email} 
        name='email' 
        label='Email'
        type='email'
        />
        {errors.email ? <span className='font-sora text-primary font-xl flex justify-center'>{errors.email}</span> : null}

        <div className='flex flex-col p-4 justify-center items-center mt-8'>
            <label className='block mb-2 bg-secondary font-sora text-md text-white p-3 font-[600] w-full'>Message</label>
            <textarea className='outline-none w-full border-box font-sora text-sm p-3 h-48 border border-[rgb(34,34,34,0,0.15)] rounded-md' name='msg' value={form.msg} onChange={handleChange} onBlur={handleBlur}/>
        </div>
        {errors.msg ? <span className='font-sora text-primary font-xl flex justify-center'>{errors.msg}</span> : null}

        <div className='flex justify-center'>
            <button type='submit' className='py-3 px-2 bg-secondary hover:bg-primary duration-300 text-white w-32 font-sora text-lg font-semibold rounded-xl mt-8'>Send</button>
        </div>
    </form>
    {resultados.map((resultado, i) => (
        showSpan && (<span key={i} className='font-sora bg-primary text-white rounded-md p-2 mt-8 flex justify-center'>Form has been sent from {resultado.email}</span>)
    ))}
    </Container>
  )
}
