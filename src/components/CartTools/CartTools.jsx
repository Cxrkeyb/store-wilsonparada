import React from 'react'
import { Link } from 'react-router-dom'
import './CartTools.css'

export default function CartTools({totalPriceCart, emptyCart}) {
    return (
        <div className='cartToolsContainer'>
            <button onClick={() => {emptyCart()}} className='btnTools btnDelete'>Eliminar productos del carrito</button>
            <span>Precio total: ${totalPriceCart().toFixed(2)}</span>
            <Link to={"/checkout"} className='btnTools btnFinish'>Finalizar compra</Link>
        </div>
    )
}
