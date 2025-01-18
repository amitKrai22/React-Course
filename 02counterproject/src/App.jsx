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
    // counter = counter + 1
    setCounter(counter + 1)
    /*
    setCounter() also give callback
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    so what happened? counter value is remain increment by 1 here concept of React fibre which send request in batch but if we use callback like this
    setCounter((prevCounter => counter + 1))
    setCounter((prevCounter => counter + 1))
    setCounter((prevCounter => counter + 1))
    then it increase by 4 so result is 1->5->9-> and so on.
    */
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
