import React from 'react'
import './CartCounter.css'

export default function CartCounter({product, modifyItem, changeCartCounter, quantityItem, setQuantityItem}) {

    const increaseC = () => {
        if(product.stock > quantityItem){
            setQuantityItem(quantityItem + 1)
            changeCartCounter('+')
        }
    }
    const decreaseC = () => {
        if(quantityItem > 1){
            setQuantityItem(quantityItem - 1)
            changeCartCounter('-')
        }
    }
    modifyItem(product, quantityItem)
    return (
        <div className='cartCounter'>
            <span className='productName'>{product.title}</span>
            <div className='cartBtnsContainer'>
                <button className='cartBtns btnRemove' onClick={decreaseC}>-</button>
                <span>{quantityItem}</span>
                <button className='cartBtns btnAdd' onClick={increaseC}>+</button>
            </div>
            <span>Cantidad</span>
        </div>
    )
}
