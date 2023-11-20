import './App.css'
import SideTab from './components/SideTab'
import SideTab2 from './components/SideTab2'
import Navbar from './components/Navbar'
import Alluser from './components/Alluser'
import Cat from './components/Cat'
import Contact from './components/Contact'
import Login from './components/Login'
import User from './components/Users'
import FriendTab from './components/FriendTab'
import CatImage from './components/CatImage'
import { Route, Routes, ScrollRestoration } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { fetchDataA, fetchDataB } from "./store/slices/apiData";
import { push } from './store/slices/likeSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataA())
    dispatch(fetchDataB())
    dispatch(push())
  },[])

  return (
    <>
    <Navbar />
    {/* <ScrollRestoration 
        getKey={Location => Location.pathname}
    /> */}
    <div className='homee'>
      <SideTab />
      <Routes>
        <Route path="/" element={<Cat />}/>
        <Route path="user" element={<Alluser />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path=":id" element={<CatImage />} />
        <Route path="t/:type" element={<FriendTab />} />
        <Route path="user/:id" element={<User />} />
      </Routes>
      <SideTab2 />
    </div>
    </>
  )
}

export default App