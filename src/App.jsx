import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Homepage from './pages/Homepage.jsx'
import Register from './pages/Register.jsx'
import  Kalkulator from './pages/Kalkulator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/kalkulator' element={<Kalkulator/>}/>
      </Routes>
    </Router>
  )
}

export default App
