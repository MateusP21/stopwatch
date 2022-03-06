import React from 'react'
import './index.css'

export default class Display extends React.Component {
  constructor() {
    super() 
    this.state = {
      minutes:'05',
      seconds:'00'
    }
  }

  handleMinutes = (minutes) => {
    this.setState({minutes})
  }

  handleSeconds = (seconds) => {
    this.setState({seconds})
  }
  render() {
    const {minutes,seconds} = this.state
    return <div className='window'>
      <div className="window-bar">
        <p>stopwatch.exe</p>
        <div className="window-bar-buttons">
          <div className="circle-button"></div>
          <div className="circle-button"></div>
          <div className="circle-button"></div>
        </div>

      </div>
      <h1>{minutes}:{seconds}</h1>
      <div className="window-inputs">
        <input onChange={(e) => this.handleMinutes(e.target.value)} type="number" name="" id="" placeholder='MM'/>
        <input onChange={(e) => this.handleSeconds(e.target.value)}  type="number" name="" id="" placeholder='SS'/>
      </div>
      <div className="window-controls">
        <span>START</span>
        <span>STOP</span>
        <span>RESET</span>
        </div>
    </div>
  }
}