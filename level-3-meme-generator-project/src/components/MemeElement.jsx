import React from 'react'
import Inputs from './Inputs'
import trollface from '../assets/trollface-transparent.png' // temporary

export default function MemeElement (props) {

    // use the received props to paint a created meme to the screen
    // also pass in the handleEdit function to the buttons using the onClick property

    return (
        <div className="meme-element-wrapper">
            <div className="inputs-button-wrapper">
                <Inputs />
                <div className="button-wrapper">
                    <button className='get-new-image button'>Edit</button>
                    <button className='submit button'>Delete</button>
                </div>
            </div>
            <div className="meme-block-wrapper">
                <img className="current-meme-image" src={trollface} />
                <h2 className='meme-text meme-text-top'>Top Text</h2>
                <h2 className='meme-text meme-text-bottom'>Bottom Text</h2>
            </div>
        </div>
    )
}