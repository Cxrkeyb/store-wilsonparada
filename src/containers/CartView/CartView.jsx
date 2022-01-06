import React,{Fragment, useContext} from 'react'
import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartProduct from '../../components/CartProduct/CartProduct'
import CartTools from '../../components/CartTools/CartTools'
import { CartContext } from '../../context/CartContext'
import './CartView.css'


export default function CheckoutCart() {
    const {cart, isInCart, removeItem, modifyItem, changeCartCounter, emptyCart, totalPriceCart} = useContext(CartContext)

    return (
        <div className='cartContainer'>`
        {/* Detecta si hay algo dentro del carrito */}
            {isInCart() ? 
                <Fragment>
                    {cart.map(element => <CartProduct key={element.id} changeCartCounter={changeCartCounter} cart={cart} modifyItem={modifyItem} product={element} removeItem={removeItem}/>)}
                    <CartTools emptyCart={emptyCart} totalPriceCart={totalPriceCart} />
                </Fragment>: 
                <CartEmpty />
            } 
        </div>
    )
}
