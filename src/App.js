import React from 'react';
import Message from './components/Message'
import StartInput from './components/StartInput'
import ToggleControl from './components/ToggleControl'
import SpeedControl from './components/SpeedControl'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      minutes: 0,
      seconds: 0,
      initialValue: null,
      isRunning: false,
      togglePauseResumeDisabled: true,
      speed: 1000
    }
  }

  tick = () => {
    //Check the timer if it has not reach 0 and if it is currently running
    if(this.state.timer > 0 && this.state.isRunning) {

      //Decrement the timer by 1 second and save new timer to the state
      let newTime = this.state.timer - 1;
      this.setState({
        timer: newTime,
        minutes: Math.floor(newTime / 60),
        seconds: newTime % 60,

      });

      //Disable Pause button if timer reaches 0
      if(this.state.timer === 0)
      this.setState({
        togglePauseResumeDisabled: true,
      });
    } else {

      //if timer reaches 0, pause the timer
      if(this.state.timer === 0) {
        clearInterval(this.timerId);
        this.setState({
          isRunning: false,
        });
      }
    }
    
  }

  // Method for formatting the timer for display
  formatTime = (minutes, seconds) => {
    if(minutes< 10)
      minutes = "0" + minutes
    if(seconds< 10)
      seconds = "0" + seconds
    return minutes + ":" + seconds;
  }

  onSubmit = (e) => {
    e.preventDefault();
    //Dont do anything is input is blank or zero
    if(e.target.startTime.value === "" || e.target.startTime.value === "0")
      return

    //Clear interval if timer is currently running
    if(this.state.isRunning) {
      clearInterval(this.timerId);
    }

    //Get initial value from the form submitted and convert it to seconds
    const minutesToSeconds = parseInt(e.target.startTime.value) * 60;

    //Save initial value to state
    this.setState({
        timer: minutesToSeconds,
        minutes: Math.floor(minutesToSeconds/60),
        seconds: minutesToSeconds % 60,
        initialValue: minutesToSeconds,
        isRunning: true,
        togglePauseResumeDisabled: false,
      });

    //Start the timer with initial speed 1000ms
    this.timerId = setInterval(
      () => this.tick(), 1000
    )
  }

  onTogglePauseResume = () => {
    let isRunning = this.state.isRunning;
    //Check if timer is running
    if(isRunning){
      //Pause the timer
      clearInterval(this.timerId);
    } else {
      //Resume the timer
      this.timerId = setInterval(
        () => this.tick(), this.state.speed
      )
    }
    
    //Toggle isRunning state
    this.setState({
      isRunning: !isRunning
    });
  
    
  }

  speedChange = (e) => {
    //Pause the timer before changing the speed
    clearInterval(this.timerId);

    //Save new speed to state
    this.setState({
      speed: e.target.value
    })

    //Check if the timer is running
    if(this.state.isRunning) {
      //If timer running when speed is changed, continue the timer
      this.timerId = setInterval(
        () => this.tick(), e.target.value
      )
    } 

  }

  render () {
    return (
      <div className="App">
        <StartInput onSubmit={this.onSubmit} />
        <Message initialValue={this.state.initialValue} timer={this.state.timer} />
        <div className="timer">
          <h1>{this.formatTime(this.state.minutes, this.state.seconds)}</h1>
        </div>
        <div className="label-minutes">
          minutes
        </div>
        <div className="label-seconds">
          seconds
        </div>
        <ToggleControl disableButton={this.state.togglePauseResumeDisabled} isRunning={this.state.isRunning} togglePauseResume={this.onTogglePauseResume} />
        <SpeedControl speedChange={this.speedChange}/>
      </div>
    );
  }
}

export default App;
