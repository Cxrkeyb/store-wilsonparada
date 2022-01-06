import React from 'react'
import ErrorCheckout from '../ErrorCheckout/ErrorCheckout'
import {Formik} from 'formik'
import * as Yup from 'yup'
import './CheckoutForm.css'

const initialValues = {
    nombre: "", 
    email: "", 
    tel: "",
    direccion: ""
}

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('Este campo es obligatorio')
        .min(4, 'El nombre es demasiado corto')
        .max(50, 'El nombre es demasiado largo'),
    email: Yup.string()
        .required('Este campo es obligatorio')
        .email('Email inválido'),
    direccion: Yup.string()
        .required('Este campo es obligatorio')
        .min(7, 'La dirección está muy corta')
        .max(75, 'La dirección está muy larga'),
    tel: Yup.number()
        .required('Este campo es obligatorio')
        .min(5, 'El teléfono escrito es muy corto')
        .max(999999999999, 'El teléfono escrito es muy largo')
})

export default function Checkout({errorItems, handleSubmit, goToCart}) {
    return (
    <div className='CheckOutContainer'>
        {errorItems.length > 0 ? <ErrorCheckout goToCart={goToCart} errorItems={errorItems} /> :
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                {(formik)=>(
                     <form className='formCheckout' onSubmit={formik.handleSubmit}>
                        <input
                            name='nombre'
                            onChange={formik.handleChange}
                            value={formik.values.nombre}
                            type="text"
                            placeholder='Nombre' 
                        />
                        {formik.errors.nombre && <span>{formik.errors.nombre}</span>}
                        <input
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            type="text"
                            placeholder='Email' 
                        />
                        {formik.errors.email && <span>{formik.errors.email}</span>}
                        <input
                            name='tel'
                            onChange={formik.handleChange}
                            value={formik.values.tel}
                            type="number"
                            placeholder='Telefono' 
                        />
                        {formik.errors.tel && <span>{formik.errors.tel}</span>}
                        <input
                            name='direccion'
                            onChange={formik.handleChange}
                            value={formik.values.direccion}
                            type="text"
                            placeholder='Dirección' 
                        />
                        {formik.errors.direccion && <span>{formik.errors.direccion}</span>}
                     <button type='submit' className='submitCheckout'>Enviar</button>
                 </form>
                )}
            </Formik>
            }
    </div>
    )
}
