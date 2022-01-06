import React from 'react'
import { Link } from 'react-router-dom'
import './CheckoutFinish.css'

export default function CheckoutFinish({orderId}) {
    return (
        <div className='orderContainer'>
            <div className='order'>
            <h2 className='titleOrder'>La compra ha sido confirmada, el código de tú pedido para hacerle seguimiento es {orderId}</h2>
            <p>El producto te llegará entre 6 a 10 días hábiles</p>
            <Link to={"/"} className='btnTools goToHome'>Volver al home</Link>
            </div>
        </div>
    )
}
