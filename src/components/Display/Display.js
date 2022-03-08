import React from 'react';
import './index.css';

export default class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      startingMinutes: 5,
      startingSeconds: 0,
      time: 0,
      seconds:0,
      minutes:0,
      startDisabled: false,
      stopDisabled: true,
      showInputs:true,
      resetDisabled: true
    };
  }

  componentDidMount() {
    this.setState({
      time: ((this.state.startingMinutes * 60) + this.state.startingSeconds),
    },() => {
      this.setState({
        minutes: Math.floor(this.state.time / 60),
        seconds: this.state.time % 60
      })
    })
  }

  componentDidUpdate(_,prevState) {
    if(prevState.startingMinutes !== this.state.startingMinutes || prevState.startingSeconds !== this.state.startingSeconds) {
this.setState({
time: ((this.state.startingMinutes * 60) + this.state.startingSeconds)
      })
    }
    if(prevState.time !== this.state.time) {
      this.setState({
        minutes: Math.floor(this.state.time / 60),
        seconds: this.state.time % 60
      })
    }

    if(prevState.time !== this.state.time && prevState.time === 0) {
      clearInterval(this.interval);
      this.setState({
        showInputs:true,
      })

    }
  }

  startCountdown = () => {
      this.interval = setInterval(() => {
        this.setState({
          time: this.state.time - 1,
        });
      }, 1000);
      this.setState({
        startDisabled:true,
        showInputs:false,
        stopDisabled:false,
        resetDisabled:false
      })
  };

  stopCountdown = () => {
    clearInterval(this.interval);
    this.setState({
      startDisabled:false,
      showInputs:true,
    })
  };

  resetCountdown = () => {
    this.stopCountdown()
    this.setState({
      startingMinutes: 0,
      startingSeconds:0,
      minutes: 0,
      seconds: 0,
      time:0
    });
  };


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMinutes = (startingMinutes) => {
    this.setState({ startingMinutes: parseInt(startingMinutes) });
  };

  handleSeconds = (startingSeconds) => {
    this.setState({ startingSeconds:parseInt(startingSeconds) });
  };
  render() {
    const { minutes, seconds,startDisabled,stopDisabled,resetDisabled,showInputs } = this.state;
    return (
      <div className="window">
        <div className="window-bar">
          <p>stopwatch.exe</p>
          <div className="window-bar-buttons">
            <div className="circle-button"></div>
            <div className="circle-button"></div>
            <div className="circle-button"></div>
          </div>
        </div>
        <h1>
          {(minutes < 10 ? `0${minutes}`: minutes)}: 
          {(seconds < 10 ? `0${seconds}` : seconds)}
        </h1>
       {
         showInputs &&
        <div className="window-inputs">
          <input
            onChange={(e) => this.handleMinutes(e.target.value)}
            type="number"
            name=""
            id=""
            placeholder="MM"
          />
          <input
            onChange={(e) => this.handleSeconds(e.target.value)}
            type="number"
            name=""
            id=""
            placeholder="SS"
          />
        </div>
  }
        <div className="window-controls">
          <button disabled={startDisabled} onClick={this.startCountdown}>START</button>
          <button disabled={stopDisabled} onClick={this.stopCountdown}>STOP</button>
          <button disabled={resetDisabled} onClick={this.resetCountdown}>RESET</button>
        </div>
      </div>
    );
  }
}
