import React from 'react'
import UserDetail from './assets/component/UserDetail'
import './App.css'


const App = () => {
  return (
    <div className="app-container">
      <div className="card">
        <h1>axios</h1>
        <UserDetail />
      </div>
    </div>
  )
}

export default App