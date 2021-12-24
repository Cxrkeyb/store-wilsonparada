import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom'
import logo from '../../assets/img/icons/NavBar/logo.png'
import Cart from '../../components/cart/cart'

export default function NavBar() {
    return (
        <div className="NavBarContainer">
            <Link exact to={"/"}><img className="NavBarLogo" src={logo} alt="Cxrkstore"/></Link>
            <Link to={"/category/componentes"}><h2 className="linkedContainer">Componentes</h2></Link>
            <Link to={"/category/perifericos"}><h2 className="linkedContainer">Perifericos</h2></Link>
            <Cart />
        </div>
    )
}
