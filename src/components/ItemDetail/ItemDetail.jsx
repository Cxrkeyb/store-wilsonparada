import React, {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import FinishCart from '../FinishCart/FinishCart';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail({product}) {

    const [quantity, setQuantity] = useState(0);
    const {productCheck} = useContext(CartContext);

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
                    productCheck(product.id) ? <FinishCart />  : <ItemCount product={product} quantity={quantity} setQuantity={setQuantity} stock={stock} setStock={setStock} />
                }
            </div>
        </div>
    )
}
