import React from 'react'

export default function Inputs (props) {
    function updateText (e) {
        const {name, value} = e.target;
        props.handleChange(name, value)
    }

    return (
        <div className="inputs-wrapper">
            <input type="text" className='text-input left-input' name={`topText${props.stateCounter}`} value={props.displayTexts[`topText${props.stateCounter}`]} onChange={updateText} placeholder='Top Text' />
            <input type="text" className='text-input right-input' name={`bottomText${props.stateCounter}`} value={props.displayTexts[`bottomText${props.stateCounter}`]} onChange={updateText} placeholder='Bottom Text' />
        </div>
    )
}