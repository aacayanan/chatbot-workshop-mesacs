import { useState } from 'react'
import './App.css'
import Window from './components/Window'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Window />
    </div>
  )
}

export default App
