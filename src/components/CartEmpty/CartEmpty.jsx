import React from 'react'
import { Link } from 'react-router-dom'
import './CartEmpty.css'

export default function CartEmpty() {
    return (
        <div className='cartEmptyContainer'>
            <h2>No hay nada en el carrito</h2>
            <Link to={"/"} className='btnTools goToHome'>Volver al home</Link>
        </div>
    )
}
