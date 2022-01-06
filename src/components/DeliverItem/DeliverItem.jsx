import React from 'react'
import './DeliverItem.css'

export default function DeliverItem({infoItem}) {
    return (
        <div className='deliverInfo'>
            <img className='deliverIcon' src={infoItem.image} alt='icono de '/>
            <h3 className='deliverTitle'>{infoItem.title}</h3>
            <p className='deliverParagraph'>{infoItem.paragraph}</p>
        </div>
    )
}
