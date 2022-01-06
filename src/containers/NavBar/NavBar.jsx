import React, { useContext } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom'
import logo from '../../assets/img/icons/NavBar/logo.png'
import Cart from '../../components/Cart/Cart'
import { CartContext } from '../../context/CartContext';

export default function NavBar() {
    const {isInCart, quantity} = useContext(CartContext)
    return (
        <div className="NavBarContainer">
            <Link exact="true" to={"/"}><img className="NavBarLogo" src={logo} alt="Cxrkstore"/></Link>
            <Link to={"/category/componentes"}><h2 className="linkedContainer">Componentes</h2></Link>
            <Link to={"/category/perifericos"}><h2 className="linkedContainer">Perifericos</h2></Link>
            {
              isInCart() ? <Link to={"/cart"}><Cart quantity={quantity} className="linkedContainer"/></Link> : null
            }
        </div>
    )
}
