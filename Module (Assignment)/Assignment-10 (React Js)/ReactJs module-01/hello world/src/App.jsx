import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 style={{color: "#00d8ff"}}>ReactJs</h1>  
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      
      <div className='helloWorld'>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
