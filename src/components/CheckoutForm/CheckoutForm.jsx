import React from 'react'

export default function Checkout({values, handleInputChange, handleSubmit}) {
    return (
        <div className='CheckOutContainer'>
            <form className='formCheckout' onSubmit={handleSubmit}>
                <input
                    name='nombre'
                    onChange={handleInputChange}
                    value={values.nombre}
                    className=''
                    type="text"
                    placeholder='Nombre' 
                />
                <input
                    name='email'
                    onChange={handleInputChange}
                    value={values.email}
                    className=''
                    type="text"
                    placeholder='Email' 
                />
                <input
                    name='tel'
                    onChange={handleInputChange}
                    value={values.tel}
                    className=''
                    type="text"
                    placeholder='Telefono' 
                />
                <input
                    name='direccion'
                    onChange={handleInputChange}
                    value={values.direccion}
                    className=''
                    type="text"
                    placeholder='Dirección' 
                />
                 
                <button type='submit' className='submitCheckout'>Enviar</button>
            </form>
            
        </div>
    )
}
