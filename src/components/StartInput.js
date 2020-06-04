import React from 'react';

function StartInput(props) {


    const isInt = (value) => {
        return !isNaN(value) && parseInt(value).toString() === value 
              // && !isNaN(parseInt(value, 10));
    }
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
            


        //e.target.value = formatInput(e.target.value);
        // let input = e.target.value;
        // input = input.replace(":","");

        // //Max character input is 4
        // if(input.length >= 0) {
        //     console.log(input)
        //     //format input for display as mm:ss
        //     if(input.length > 2)
        //         e.target.value = input.slice(0,2) + ":" + input.slice(2,4);
        //     else
        //         e.target.value = input

        //     if(Number(e.target.value)) {
        //         console.log("yesinteger")
        //     } else {  
        //         console.log("no!!!!integet")
        //     }
        // } else {
        //     //display only 4 characters and format it to mm:ss
        //     //e.target.value = e.target.value.slice(0,2) + ":" + e.target.value.slice(2)
        // }
        

    }
    return(
        <form onSubmit={props.onSubmit}>
            <input type="text" onChange={onChange} name="startTime" id="startTime" placeholder="(Minutes)"/>
            <button>Start</button>
        </form>    )
}

export default StartInput