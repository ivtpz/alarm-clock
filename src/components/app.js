import React, { Component } from 'react';
import Sound from 'react-sound';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './app.css';
import Cow from './Cow';
import Clock from './Clock';
import CountDownSelector from './CountDownSelector';
import RemainingTime from './RemainingTime';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: 0,
      min: 0,
      sec: 0,
      countingDown: false,
      countDownMin: 0,
      countDownSec: 0,
      playing: 'STOPPED',
      showCow: false
    }
    let tick = this.tick.bind(this);
    this.handleCountDownInput = this.handleCountDownInput.bind(this);
    this.startCountdown = this.startCountdown.bind(this)
    this.cancelCountDown = this.cancelCountDown.bind(this)
    setInterval(tick, 1000)
  }

  tick() {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    this.setState({hours: hours, min: min, sec: sec});
    if (this.state.countingDown) {
      let remaining = this.state.remainingSec - 1;
      if (!remaining) {
        this.setState({countingDown: false});
        this.soundAlarm();
      }
      this.setState({remainingSec: remaining})
    }
  }

  handleCountDownInput(key, event) {
    let newVal = {};
    newVal[key] = parseInt(event.target.value);
    this.setState(newVal);
  }

  startCountdown() {
    let min = typeof this.state.countDownMin === 'number' && 
    !isNaN(this.state.countDownMin) ? 
    this.state.countDownMin : 0;

    let sec = typeof this.state.countDownSec === 'number' && 
    !isNaN(this.state.countDownSec) 
    ? this.state.countDownSec : 0;

    let seconds = min * 60 + sec;
    if (seconds) {
      let newState = {countingDown: true, remainingSec: seconds};
      this.setState(newState);
    }
  }

  cancelCountDown() {
    this.setState({countingDown: false});
    this.setState({remainingSec: 0})
  }

  soundAlarm() {
    this.setState({playing: 'PLAYING', showCow: true});
    setTimeout(() => this.setState({playing: 'STOPPED', showCow: false}), 3000);
  }

  render() {
    return (
      <div className="App">
        <Cow display={this.state.showCow} />
        <Sound url="/static/moo.mp3" playStatus={this.state.playing} />
        <Clock hours={this.state.hours} min={this.state.min} sec={this.state.sec}/>
        <CountDownSelector 
          updateInput={this.handleCountDownInput} 
          startCountdown={this.startCountdown}
          cancelCountDown={this.cancelCountDown}
          countingDown={this.state.countingDown}
        />
        <RemainingTime remainingSec={this.state.remainingSec} />
      </div>
    );
  }
}

export default App;


