import { useState } from 'react'
import DisplayNumber from './components/display'

function App() {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count +1)
  const reset = ()=> setCount(0)

  return (
    <>
    <h1 className='Title'>Counter App</h1>
    <div className='mainContainer'>
      <div className='countContainer'>
        <DisplayNumber num={count}></DisplayNumber>
      </div>
      <div className='buttonContainer'>
        <button className='increment' onClick={increment}>ADD</button>
        <button className='decrement' onClick={decrement}>SUBTRACT</button>
        <button className='reset' onClick={reset}>RESET</button>
      </div>
    
    
    </div>
    
    </>
  )
}

export default App
