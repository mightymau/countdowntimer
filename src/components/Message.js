import React from 'react';


function Message(props) {
    //Method for displaying the message based on the props timer value
    const displayMessage = () => {
        if(props.timer <= Math.abs(props.initialValue / 2) && props.initialValue !== null) {
            if(props.timer <= 10) {
                if(props.timer === 0) {
                    return "Time's Up!"
                } 
            }
            return "More than halfway there!"
        }
        return 
    }
    return(
        <div className="message"><h2 className="message">{displayMessage()}</h2></div>
    )
}

export default Message