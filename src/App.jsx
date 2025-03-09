import { useState } from 'react'
import 'two-up-element'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src="star-wars-logo.jpg" alt="" />
      <two-up>
        <img src="cromo-anakin.jpg" alt="anakin" />
        <img src="cromo-vader.jpg" alt="vader" />
      </two-up>
    </>
  )
}

export default App
