import React from 'react'
import Inputs from './Inputs'
import trollface from '../assets/trollface-transparent.png' // temporary

export default function MemeElement (props) {

    /*

    const memeElements = props.savedMemes.map(meme => <MemeElement 
        key={meme.id} 
        data={meme} --> id, stateCounter, topText, bottomText
        utilities={props.utilities}
    />)

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


    return (
        <div className="meme-element-wrapper">
            <div className="inputs-button-wrapper">
                {props.utilities.showEditField && props.utilities.currentTexts[`topText${props.data.stateCounter}`] && <Inputs displayTexts={props.utilities.currentTexts} stateCounter={props.data.stateCounter} handleChange={props.utilities.handleEditInputChange}/>}
                <div className="button-wrapper">
                    <button className='get-new-image button' onClick={handleSaveEditButton} value={props.utilities.editSaveButtonValue}>{props.utilities.editSaveButtonValue}</button>
                    <button className='submit button' onClick={() => props.utilities.deleteMeme(props.data.id)}>Delete</button>
                </div>
            </div>
            <div className="meme-block-wrapper">
                <img className="current-meme-image" src={trollface} />
                <h2 className='meme-text meme-text-top'>{memeTextTop}</h2>
                <h2 className='meme-text meme-text-bottom'>{memeTextBottom}</h2>
            </div>
        </div>
    )
}