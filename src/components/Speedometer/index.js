import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevStat => {
      console.log(`previous state count is ${prevStat.count}`)

      return prevStat.count < 200
        ? {count: prevStat.count + 10}
        : {count: prevStat.count}
    })
  }

  onApplybrake = () => {
    this.setState(prevStat => {
      console.log(`previous state count is ${prevStat.count}`)

      return prevStat.count > 0
        ? {count: prevStat.count - 10}
        : {count: prevStat.count}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card-items">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="speedometer"
            className="image"
          />

          <h1 className="heading">Speed is {count}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button className="accelerate-button" onClick={this.onIncrement}>
              Accelerate
            </button>
            <button className="apply-brake" onClick={this.onApplybrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
