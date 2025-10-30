import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
      <div id='container'>
        <h1>Tehtävälista</h1>
        <form>
          <input placeholder='Syötä uusi tehtävä' />
        </form>
        <ul></ul>
      </div>

  )
}

export default App
