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
  /**
   * @description   Handles the update for the timer in every interval.
   *                The interval speed is handled by state.speed
   */
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
      //if timer reaches 0, stop the timer
      if(this.state.timer === 0) {
        clearInterval(this.timerId);
        this.setState({
          isRunning: false,
        });
      }
    }  
  }

  /**
   * @description   Formats the timer for display
   * @return        Timer in MM:SS format enclosed in a span tag
   */
  formatTime = (minutes, seconds) => {
    if(minutes < 10)
      minutes = "0" + minutes;
    if(seconds < 10)
      seconds = "0" + seconds;
    return (<span>{minutes}:{seconds}</span>);
  }

  /**
   * @description   Handles the event when input form is submitted.
   * @param         {object} e Event object from the form that contains the initial timer value in minutes.
   */
  onSubmit = (e) => {
    //Prevents the page from refreshing.
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
      speed: 1000
    });

    //Start the timer with initial speed 1000ms
    this.timerId = setInterval(
      () => this.tick(), 1000
    )
  }

  /**
   * @description Method for Pause or Resume button is pressed.
   */
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

  /**
   * @description   Method for changing the speed of the timer interval
   * @param         {Object} e Event object from the buttons that contains the value for speed interval in milliseconds 
   */
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

  /**
   * @description   Method to check when timer is less than 20 and less than 10 
   * @return        CSS class name for styling the timer when it is  or less 20 seconds or less and 10 seconds.    
   *             
   */
  getTimerStyle = () => {
    if(this.state.timer <= 20 && this.state.initialValue != null) {
      if(this.state.timer <= 10 && this.state.initialValue != null )
        return "warning blink"
      return "warning"
    }
  }

  render () {
    return (
      <div className="App">
        <StartInput onSubmit={this.onSubmit} />
        <Message initialValue={this.state.initialValue} timer={this.state.timer} />
        <div className="timer">
          <h1 className={this.getTimerStyle()}>{this.formatTime(this.state.minutes, this.state.seconds)}</h1>
        </div>
        <ToggleControl disableButton={this.state.togglePauseResumeDisabled} isRunning={this.state.isRunning} togglePauseResume={this.onTogglePauseResume} />
        <SpeedControl disableButton={!this.state.isRunning} selectedSpeed={this.state.speed} speedChange={this.speedChange}/>
      </div>
    );
  }
}

export default App;
