import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Hero } from './component/Hero'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/> } />
        <Route path='/dashboard' element={<Dashboard/> } />
        
      </Routes>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        pauseOnHover
        closeOnClick
        draggable
      />
    </>
  )
}

export default App