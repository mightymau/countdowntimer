import React from 'react';
/**
 * @description Component for Pause and Resume button
 * 
 * @param {Object.Boolean} props.isRunning Boolean to determine if the timer is running
 * @param {Object.Boolean} props.disableButton Boolean to determine if button is disabled
 * @param {Object.Function} props.togglePauseResume Function from App component to Pause or Resume timer
 */
function ToggleControl(props) {
    return(
        <div className="pause">
            <button className={props.isRunning || props.disableButton ? "pause-button" : "resume-button"} disabled={props.disableButton} onClick={props.togglePauseResume}>{props.isRunning  || props.disableButton ?  "Pause" :   "Resume" }</button>
        </div>
    )
}

export default ToggleControl