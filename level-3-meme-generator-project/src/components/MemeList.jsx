import React from 'react'
import MemeElement from './MemeElement'

export default function MemeList (props) {
    /* 
        <MemeList savedMemes={savedMemes} 
                  utilities={utilities}     
        />
    */

    const weave = (array, something) => array.map(item => [item, something]).flat().slice(0, -1);

    const memeElements = props.savedMemes.map(meme => <MemeElement 
        key={meme.id} 
        data={meme} // -> meme = {id, stateCounter, topText*, bottomText*, img}
        utilities={props.utilities} // utility functions and state values to be used in MemeElement()
    />)

    return (
        <div className="meme-list-wrapper">
            <div className="saved-memes-title-wrapper">
                <h3 className="saved-memes-title">
                    Saved Memes
                </h3>
            </div>
            {weave(memeElements, <hr />)}
            {memeElements.length > 0 && <div className="buffer"></div>}
        </div>
    )
}