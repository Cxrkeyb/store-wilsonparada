import React, {useState} from 'react'
import CartCounter from '../CartCounter/CartCounter'
import './CartProduct.css'
export default function CartProduct({modifyItem, product, removeItem, cart, changeCartCounter}) {
    const [quantityItem, setQuantityItem] = useState(product.quantityitem)
    return (
        <div className='cartProduct'>
            <img className='cartImage' src={product.photo} alt={`imagen de ${product.title}`}/>
            <CartCounter quantityItem={quantityItem} setQuantityItem={setQuantityItem} changeCartCounter={changeCartCounter} cart={cart} modifyItem={modifyItem} product={product}/>
            <div>
                <button className='deleteBtn' onClick={()=> {removeItem(product.id)}}>X</button>
                <div className='cartInfo'>
                    <span>Stock disponible: {product.stock}</span>
                    <span>Price: ${(quantityItem*product.price).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}
