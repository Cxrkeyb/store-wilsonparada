import React from 'react'
import ErrorItemCheckout from '../ErrorItemCheckout/ErrorItemCheckout'
import { Link } from 'react-router-dom'
import './ErrorCheckout.css'

export default function ErrorCheckout({errorItems, goToCart}) {
    return (
           <div className='ErrorContainer'>
               <h3>Tenemos un problema con el stock de los siguientes productos:</h3>
               {errorItems.map((item) => 
                   <ErrorItemCheckout item={item} />
               )}
               <Link className="btnTools goToHome" to={"/cart"} onClick={goToCart}>Volver al carrito</Link>
           </div>
    )
}
