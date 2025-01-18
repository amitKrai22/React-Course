import { useState } from 'react'


function App() {
  const [color, setColor] = useState('white')

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor:'orange'}}>Orange</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor:'black'}}>black</button>
            <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-md' style={{backgroundColor:'lavender'}}>Lavender</button>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor:'red'}}>Red</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor:'blue'}}>blue</button>
            <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-md' style={{backgroundColor:'white'}}>White</button>
            <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor:'purple'}}>Purple</button>
          </div>
        </div>
        
    </div>
  )
}

export default App
