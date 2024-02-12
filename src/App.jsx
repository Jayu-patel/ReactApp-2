import './App.css'
import Alluser from './components/Alluser'
import Cat from './components/Cat'
import Contact from './components/Contact'
import Login from './components/Login'
import User from './components/Users'
import FriendTab from './components/FriendTab'
import CatImage from './components/CatImage'
import { Route, RouterProvider, Routes, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { fetchDataA, fetchDataB } from "./store/slices/apiData";
import { push } from './store/slices/likeSlice'
import { useEffect } from 'react'
import MainLayout from './components/MainLayout'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataA())
    dispatch(fetchDataB())
    dispatch(push())
  },[])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path: '/', element: <Cat/>},
        {path: '/user', element: <Alluser/>},
        {path: '/contact', element: <Contact/>},
        {path: '/login', element: <Login/>},
        {path: '/:id', element: <CatImage/>}, 
        {path: '/t/:type', element: <FriendTab/>},
        {path: '/user/:id', element: <User/>}, 
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App