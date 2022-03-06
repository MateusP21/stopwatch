import React from 'react'
import './index.css'

export default class Display extends React.Component {
  render() {
    return <div className='window'>
      <div className="window-bar">
        <p>stopwatch.exe</p>
        <div className="window-bar-buttons">
          <div className="circle-button"></div>
          <div className="circle-button"></div>
          <div className="circle-button"></div>
        </div>

      </div>
      <h1>05:00</h1>
      <div className="window-inputs">
        <input type="number" name="" id="" placeholder='MM'/>
        <input type="number" name="" id="" placeholder='SS'/>
      </div>
      <div className="window-controls">
        <span>START</span>
        <span>STOP</span>
        <span>RESET</span>
        </div>
    </div>
  }
}