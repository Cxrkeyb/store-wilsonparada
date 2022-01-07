import React from 'react'
import DeliverItem from '../../components/DeliverItem/DeliverItem'
import {deliverInfo} from '../../services/data'
import './DeliverContainer.css'

export default function DeliverContainer() {
    return (
        <div className='deliverContainer'>
            {deliverInfo.map((infoItem) => <DeliverItem key={infoItem.id} infoItem={infoItem} />)}
        </div>
    )
}
