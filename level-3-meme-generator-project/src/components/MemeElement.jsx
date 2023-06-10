import React from 'react'

export default function MemeElement (props) {

    // use the received props to paint a created meme to the screen
    // also pass in the handleEdit function to the buttons using the onClick property

    return (
        <div className="meme-element-wrapper">
            {/* A meme picture with some text */}
            {/* Edit button, delete button with onChange={props.handleEdit} */}
        </div>
    )
}