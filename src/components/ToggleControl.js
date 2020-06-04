import React from 'react';

function ToggleControl(props) {
    return(
        <div className="pause">
            <button disabled={props.disableButton} onClick={props.togglePauseResume}>{props.isRunning  || props.disableButton ?  "Pause" :   "Resume" }</button>
        </div>
    )
}

export default ToggleControl