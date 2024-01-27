import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // The counter and setCounter is just perameter we can change whenever we use a new useState() hook so enjoy 
  

  let addValue = ()=>{
    if (counter < 20){
      setCounter(counter + 1)
    }else{
      setCounter(counter)
    }
  }

  let removeValue = ()=>{
    if(counter == 0){
      setCounter(counter)
    }else{
      setCounter(counter - 1)
    }
  }


  return (
    <>
   <h1>Reat with Pankaj</h1>
   <h2>Counter = {counter}</h2>
   <button onClick={addValue}>Add value</button>
   <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
