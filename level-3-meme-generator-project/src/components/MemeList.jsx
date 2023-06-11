import React from 'react'
import MemeElement from './MemeElement'

export default function MemeList (props) {

    // MemeList should receive an array of meme element data and a reference to a handleEdit function of sorts
    // Here we can generate an array of MemeElements using .map on said data, shoving in the props of id, top text, bottom text, image, and the handleEdit function
    //  Then we render the array of elments inside the meme list wrapper
    // i.e. something like the following:
    // const memeElements = props.memeData.map(meme => <MemeElement id={someGeneratedId} topText={meme.topText} bottomText={meme.bottomText} image={meme.image} />)
    // we could alternatively just pass in the whole meme object like meme={meme}. We would just need to change how we access the data in the MemeElement component

    return (
        <div className="meme-list-wrapper">
            <div className="saved-memes-title-wrapper">
                <h3 className="saved-memes-title">
                    Saved Memes
                </h3>
            </div>
            {/* {memeElements} */}
            <MemeElement />
            <hr />
            <MemeElement />
        </div>
    )
}