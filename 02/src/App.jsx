import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  const addValue = () => {
      counter = counter+1
      setcounter(counter)
  }

  const removeValue =() => {
    counter = counter -1;
    setcounter(counter)
  }

  return (
    <>
      <h1>why you need hooks ?</h1>
      <h2>count value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
