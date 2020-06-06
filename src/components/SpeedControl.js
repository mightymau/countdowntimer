import React from 'react'
/**
 * @description Component that contains three buttons that handles changing the speed of the timer.
 * 
 * @param {Object.Boolean} props.disableButton The value is true when button is disabled
 * @param {Object.Number} props.selectedSpeed Contains the value of the current speed in milliseconds.
 * @param {Object.Function} props.speedChange Function from App component that handles changing the interval speed.                
 */
function SpeedControl(props) {
    return(
        <div className="speed">
            <button disabled={props.disableButton} className={props.selectedSpeed === 1000 ? "selected speed-button" : "speed-button"} onClick={props.speedChange} value="1000">1x</button>
            <button disabled={props.disableButton} className={props.selectedSpeed === 666 ? "selected speed-button" : "speed-button"} onClick={props.speedChange} value="666">1.5x</button>
            <button disabled={props.disableButton} className={props.selectedSpeed === 500 ? "selected speed-button" : "speed-button"} onClick={props.speedChange} value="500">2x</button>
        </div>
    )
}

export default SpeedControl