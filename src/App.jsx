import './App.css'
import React from 'react'
import SideTab from './components/SideTab'
import SideTab2 from './components/SideTab2'
import Navbar from './components/Navbar'
import Alluser from './components/Alluser'
import Cat from './components/Cat'
import Contact from './components/Contact'
import Login from './components/Login'
import User from './components/Users'
import { Route, Routes } from 'react-router-dom'
import FriendTab from './components/FriendTab'
import CatImage from './components/CatImage'

function App() {
  return (
    <>
    <Navbar />
    <div className='homee'>
      <SideTab />
      <Routes>
        <Route path="/" element={<Cat />}/>
        <Route path="/user" element={<Alluser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<CatImage />} />
        <Route path="/t/:type" element={<FriendTab />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <SideTab2 />
    </div>
    </>
  )
}

export default App