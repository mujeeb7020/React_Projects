import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

const handleInc=()=>{
  if(count>=0 && count<20){
    setCount((count)=>count+1)
  }
}



const handleDecrement=()=>{

  if(count > 0 )
  setCount(count-1)
 }


 

  return (
    <>
     
      
      <div className="card">
        {count}
        <button onClick={handleInc}>
          increase 
        </button>

        <button onClick={handleDecrement}>
          decrese
        </button>
      </div>
      
    </>
  )
}

export default App
