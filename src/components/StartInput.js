import React from 'react';
/**
 * @description Component for input timer length
 * 
 * @param {Object.Function} props.onSubmit Function from App component to process initial value of the timer
 */
function StartInput(props) {

    const isInt = (value) => {
        return !isNaN(value) && parseInt(value).toString() === value 
    }
    // Function to validate input. Input only accepts numbers from 0 to 99.
    const onChange = (e) => {
        //Determine if input is an integer
        if(isInt(e.target.value)){
            e.target.value = e.target.value.slice(0,2)
        } else {
            if(!isNaN(parseInt(e.target.value)))
            e.target.value = parseInt(e.target.value).toString().slice(0,2)
            else
            e.target.value = null
        }
    }
    return(
        <div className="input-form">
            <form onSubmit={props.onSubmit}>
                <input className="input-box" type="text" onChange={onChange} name="startTime" id="startTime" placeholder="(Min)"/>
                <button className="submit-button">Start</button>
            </form>
        </div>
    )
}

export default StartInput