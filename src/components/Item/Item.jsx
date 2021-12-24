import React from 'react'
import './Item.css';
import {useHistory} from 'react-router-dom';

export default function Item(product) {
        let history = useHistory();
    return (
        <div onClick={()=> history.push(`/item/${product.id}`)}className="productContainer">
            <img className="productImage" src={product.photo} alt={`Imagen de ${product.title}`}  />
            <h2 className="productTitle">{product.title}</h2>
            <h4>Precio: ${product.price}</h4>
        </div>
    )
}