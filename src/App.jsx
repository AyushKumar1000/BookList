import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookAdd from './Components/Bookadd.jsx'
import QuoteBox from './Components/Quote.jsx'
import Timer from './Components/timer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BookAdd />
      <QuoteBox />
      <Timer />

      
      </div>
      
    </>
  )
}

export default App
