import React from 'react'

export default function Counter({quantity, decreaseCounter, increaseCounter}) {
    return (
        <div className='counterContainer'>
                <button className='countersContainer' onClick={decreaseCounter}>-</button>
                <span className='counterNumber'>{quantity}</span>
                <button className='countersContainer' onClick={increaseCounter}>+</button>
        </div>
    )
}
