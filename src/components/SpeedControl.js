import React from 'react'

function SpeedControl(props) {
    return(
        <div className="speed">
            <button disabled={ props.disableButton} className={props.selectedSpeed == 1000 ? "selected speed-button" : "speed-button"} onClick={props.speedChange} value="1000">1x</button>
            <button disabled={ props.disableButton} className={props.selectedSpeed == 666 ? "selected speed-button" : "speed-button"} onClick={props.speedChange} value="666">1.5x</button>
            <button disabled={ props.disableButton} className={props.selectedSpeed == 500 ? "selected speed-button" : "speed-button"}onClick={props.speedChange} value="500">2x</button>
        </div>
    )
}

export default SpeedControl