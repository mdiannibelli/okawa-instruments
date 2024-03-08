import {useState, useEffect} from 'react'

const useFormulario = (initial, validateForm) => {
    const [form, setForm] = useState(initial)
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })                              
    }
    // console.log(form)

  /*   useEffect(() => {
        setErrors(validateForm(form))
    }, [form]) */
    const handleBlur = () => {
        setErrors(validateForm(form))
    }

    const reset = () => {
        setForm(initial)
        // setForm({name: '', lastName:'', email:''})
    }

    return [form, handleChange, handleBlur , reset ,  errors]
}

export default useFormulario;