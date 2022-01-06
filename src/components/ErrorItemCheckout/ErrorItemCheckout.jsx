import React from 'react'
import './ErrorItemCheckout.css'

export default function ErrorItemCheckout({item}) {
    return (
        <div className='itemContainer'>
            <img className='cartImage' src={item.photo} alt={`imagen de ${item.title}`}/>
            <h2>{item.title}</h2>
        </div>
    )
}
