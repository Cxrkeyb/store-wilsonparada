import React from 'react'
import carrito from '../../assets/img/icons/NavBar/carrito.png'
import './cart.css'

export default function cart() {
    return (
        <div className="cartwidget">
            <img className="NavBarCart" src={carrito} alt="Carro de compras"/><span className="counterCart">1</span>
        </div>
    )
}
