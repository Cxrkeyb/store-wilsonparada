import React from 'react'
import {Link} from 'react-router-dom'
import './FinishCart.css'

export default function FinishCart() {
    return (
        <div className='finishContainer'>
            <Link to={"/cart"}><div className='containerFinish addToCartContainer'>Finalizar Compra</div></Link>
            <Link exact to={"/"}><div className='containerContinue addToCartContainer'>Seguir Comprando</div></Link>
        </div>
    )
}
