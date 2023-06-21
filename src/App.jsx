import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/about" element={<About/>}/>   
      <Route path="/" element={Home}/>    
     </Routes>
    </>
  )
}

export default App
