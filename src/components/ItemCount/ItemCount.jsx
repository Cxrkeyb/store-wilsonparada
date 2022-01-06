import React, {Fragment, useContext} from 'react'
import Counter from '../Counter/Counter'
import {CartContext} from '../../context/CartContext'
import './ItemCount.css'

export default function ItemCount({product, stock, setStock , setQuantity , quantity}) {

    const {isInCart, addItem} = useContext(CartContext)

    const increaseC = () => {
        if(stock > 0){
            setQuantity(quantity + 1)
            setStock(stock - 1)
        }
    }
    const decreaseC = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
            setStock(stock + 1)
        }
    }
    function addToCart(){
        if(quantity > 0){
            addItem(product, quantity)
            isInCart()
        }
    }
    return (
        <Fragment>
            <Counter stock={stock} quantity={quantity}  increaseCounter={increaseC} decreaseCounter={decreaseC} />
            <span className='counterNumber'>${(product.price * quantity).toFixed(2)}</span>
            <button className='addToCartContainer addToCart' onClick={addToCart}>Agregar al carrito</button>
        </Fragment>
        
    )
}
