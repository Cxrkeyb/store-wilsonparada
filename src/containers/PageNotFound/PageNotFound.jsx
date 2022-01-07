import React from 'react'
import { Link } from 'react-router-dom'
import Error404 from '../../assets/img/icons/Error404/mario-bros-404-page.jpg'
import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <div className='containerError'>
            <img className='error404image' src={Error404} alt='Página no encontrada'/>
            <Link to="/" className='btnTools goToHome'>Volver al home</Link>
        </div>
    )
}
