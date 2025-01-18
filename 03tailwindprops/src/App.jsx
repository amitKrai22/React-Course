import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1 className='bg-orange-400 text-black p-4 rounded-xl'>You are learn Tailwindcss</h1>   

      <Card username="coffee with code" btnText = "visitme"/>       
      <Card username="Atom and Elements" btnText = "Learn me"/>       

    </>
  )
}

export default App
