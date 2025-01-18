import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// React control UI upgradation
// hooks used for multiple upgradation in a one go.
function App() {
  let [counter, setCounter] = useState(1)

  const addvalue = () =>{
    // console.log('clicked', counter);
    if (counter < 20) {
    counter = counter + 1
    setCounter(counter)
  }
  }

  const removevalue = () => {
    if (counter > 0) {
    setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Coffee with code</h1>
    <h2>Counter value: {counter}</h2>
    <br />
    <button
    onClick={(addvalue)}>Add value</button>
    <br />
    <button
    onClick={removevalue}>Remove value</button>
    <p>footer: {counter}</p>  
    </>
  )
}

export default App
