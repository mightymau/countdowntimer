import React from 'react';

function ToggleControl(props) {
    return(
    <button disabled={props.disableButton} onClick={props.togglePauseResume}>{props.isRunning  || props.disableButton ?  "Pause" :   "Resume" }</button>
    )
}

export default ToggleControl