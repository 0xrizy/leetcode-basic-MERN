import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './element/Home'
import New from './element/New'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import Login from './element/Login'
import Register from './element/Register'

function App() {
  return (
    <div className='App1'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newProblem' element={<New/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
