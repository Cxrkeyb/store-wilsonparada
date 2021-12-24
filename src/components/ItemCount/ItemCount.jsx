import React, {Fragment} from 'react'
import Counter from '../Counter/Counter'
import './ItemCount.css'

export default function ItemCount({price, stock, setStock , setQuantity , quantity, setAddToCart}) {

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
            setAddToCart(true)
        }else{
            // Modal diciendo que no seleccionó una cantidad
        }
    }

    return (
        <Fragment>
            <Counter quantity={quantity}  increaseCounter={increaseC} decreaseCounter={decreaseC} />
            <span className='counterNumber'>${(price * quantity).toFixed(2)}</span>
            <button className='addToCartContainer addToCart' onClick={addToCart}>Agregar al carrito</button>
        </Fragment>
        
    )
}
