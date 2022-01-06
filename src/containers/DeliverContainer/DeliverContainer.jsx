import React from 'react'
import DeliverItem from '../../components/DeliverItem/DeliverItem'
import {deliverInfo} from '../../services/data'
import './DeliverContainer.css'

export default function DeliverContainer() {
    console.log(deliverInfo)
    return (
        <div className='deliverContainer'>
            {deliverInfo.map((infoItem) => <DeliverItem infoItem={infoItem} />)}
        </div>
    )
}
