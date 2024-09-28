import React, { useContext } from 'react'
import "./index.scss"
import logo from "../../assets/logo.png"
import RightComponent from './Right component/RightComponent'
import Model from '../models/Model'
import { ModelConstant, ModelContext } from '../../ContexProvider/ModelProvider'

function HomeScreen() {
  const {openModel} = useContext(ModelContext)
  const openCreatePlaygroundModel =()=>{
    openModel(ModelConstant.CREATE_PLAYGROUND)
  }
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src={logo} alt='logo'/>
          <h1><span className='bold'>Code</span> Flow</h1>
          <h2>Code.Compile.Debug</h2>
          <button onClick={openCreatePlaygroundModel}>
              <span className="material-icons">add</span>
            <span>Create New Playground</span>
          </button>
        </div>
      </div>
      <RightComponent/>
      <Model/>
    </div>
  )
}

export default HomeScreen