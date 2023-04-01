import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onModeChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`mode-container ${modeClassName}`}>
          <h1 className="heading">Click To change Mode</h1>
          <button className="button" type="button" onClick={this.onModeChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
