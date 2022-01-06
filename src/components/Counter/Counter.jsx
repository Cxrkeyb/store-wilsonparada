import React from 'react'
import './Counter.css'

export default function Counter({stock, quantity, decreaseCounter, increaseCounter}) {
    return (
        <div className='counterContainer'>
                <button className={`${quantity === 0 ? 'countersError' : 'countersSuccess'} countersContainer`} onClick={decreaseCounter}>{quantity === 0 ? "x" : "-"}</button>
                <span className='counterNumber'>{quantity}</span>
                <button className={`${stock === 0 ? 'countersError' : 'countersSuccess'} countersContainer`} onClick={increaseCounter}>{stock === 0 ? "x" : "+"}</button>
        </div>
    )
}
