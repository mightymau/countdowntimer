import React from 'react';

/**
 * @description    Component for displaying the message based on the timer value. 
 * @param {Object.Number} props.timer contains the current timer value
 */
function Message(props) {
    const displayMessage = () => {
        const messageOnHalfway = "More than halfway there!";
        const messageOnTimesUp = "Time's Up!";
        
        if(props.timer <= Math.abs(props.initialValue / 2) && props.initialValue !== null) {
            if(props.timer === 0) {
                return messageOnTimesUp
            } 
            return messageOnHalfway
        } 
    }
    return(
        <div className="message"><h2 className="message">{displayMessage()}</h2></div>
    )
}
export default Message