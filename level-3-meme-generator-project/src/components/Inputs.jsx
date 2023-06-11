import React from 'react'

export default function Inputs () {
    return (
        <div className="inputs-wrapper">
            <input type="text" className='text-input left-input' placeholder='Top Text' />
            <input type="text" className='text-input right-input' placeholder='Bottom Text' />
        </div>
    )
}