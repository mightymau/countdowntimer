import React from 'react'

function SpeedControl(props) {
    return(
        <div className="speed">
            <button onClick={props.speedChange} value="1000">1x</button>
            <button onClick={props.speedChange} value={ 1000 / 1.5 }>1.5x</button>
            <button onClick={props.speedChange} value="500">2x</button>
        </div>
    )
}

export default SpeedControl