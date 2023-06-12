import React from 'react'
import Inputs from './Inputs'

export default function MemeElement (props) {
    /*
        <MemeElement 
            key={meme.id} 
            data={meme} // -> meme = {id, stateCounter, topText*, bottomText*, img}
            utilities={props.utilities}
        />
    */

    function handleSaveEditButton (e) {
        const {value} = e.target;
        if (value === "Edit") {
            props.utilities.initiateEditState(props.data[`topText${props.data.stateCounter}`], props.data[`bottomText${props.data.stateCounter}`], props.data.stateCounter)
        } else {
            props.utilities.saveEdit(props.data.id, props.data.stateCounter)
        }
    }

    let memeTextTop;
    let memeTextBottom;

    if (props.utilities.editSaveButtonValue != "Edit" && props.utilities.currentTexts[`topText${props.data.stateCounter}`]) {
        memeTextTop = props.utilities.currentTexts[`topText${props.data.stateCounter}`];
        memeTextBottom = props.utilities.currentTexts[`bottomText${props.data.stateCounter}`];
    } else {
        memeTextTop = props.data[`topText${props.data.stateCounter}`]
        memeTextBottom = props.data[`bottomText${props.data.stateCounter}`]
    }

    let inputCondition = Boolean(props.utilities.currentTexts[`topText${props.data.stateCounter}`]) || props.utilities.currentTexts[`topText${props.data.stateCounter}`] === '';

    let buttonValueCondition = Boolean(props.utilities.currentTexts[`topText${props.data.stateCounter}`]) || props.utilities.currentTexts[`topText${props.data.stateCounter}`] === '';

    return (
        <div className="meme-element-wrapper">
            <div className="inputs-button-wrapper">
                {inputCondition && <Inputs displayTexts={props.utilities.currentTexts} stateCounter={props.data.stateCounter} handleChange={props.utilities.handleInputChange}/>}
                <div className="button-wrapper">
                    <button className='get-new-image button' onClick={handleSaveEditButton} value={buttonValueCondition ? "Save" : "Edit"}>{buttonValueCondition ? "Save" : "Edit"}</button>
                    <button className='submit button' onClick={() => props.utilities.deleteMeme(props.data.id, props.data.stateCounter)}>Delete</button>
                </div>
            </div>
            <div className="meme-block-wrapper">
                <img className="current-meme-image" src={props.data.image} />
                <h2 className='meme-text meme-text-top'>{memeTextTop}</h2>
                <h2 className='meme-text meme-text-bottom'>{memeTextBottom}</h2>
            </div>
        </div>
    )
}