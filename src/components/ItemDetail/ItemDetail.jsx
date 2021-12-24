import React, {useState} from 'react'
import FinishCart from '../FinishCart/FinishCart';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail({product}) {

    const [quantity, setQuantity] = useState(0);
    const [addToCart, setAddToCart] = useState(false);

    const [stock, setStock] = useState(product.stock);

    return (
        <div className='productDetailContainer'>
            <div><img alt={product.title} src={product.photo} className='productDetailImage'/></div>
            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <ul>
                    <li>{product.charact1}</li>
                    <li>{product.charact2}</li>
                    <li>{product.charact3}</li>
                </ul>
                <span>El stock disponible es: {stock}</span>
                {
                    addToCart ? <FinishCart /> : <ItemCount setAddToCart={setAddToCart} quantity={quantity} setQuantity={setQuantity} price={product.price} stock={stock} setStock={setStock} />
                }
            </div>
        </div>
    )
}
