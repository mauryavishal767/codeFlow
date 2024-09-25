import React from 'react'
import "./index.scss"
import logo from "../../assets/logo.png"


function HomeScreen() {
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src={logo} alt='logo'/>
          <h1><span className='bold'>Code</span> Flow</h1>
          <h2>Code.Compile.Debug</h2>
          <button>
              <span className="material-icons">add</span>
            <span>Create New Playground</span>
          </button>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  )
}

export default HomeScreen