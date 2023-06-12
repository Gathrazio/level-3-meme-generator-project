import React from 'react'

export default function Inputs (props) {
    return (
        <div className="inputs-wrapper">
            <input type="text" className='text-input left-input' name={`topText${props.stateCounter}`} value={props.displayTexts[`topText${props.stateCounter}`]} onChange={props.handleChange} placeholder='Top Text' />
            <input type="text" className='text-input right-input' name={`bottomText${props.stateCounter}`} value={props.displayTexts[`bottomText${props.stateCounter}`]} onChange={props.handleChange} placeholder='Bottom Text' />
        </div>
    )
}