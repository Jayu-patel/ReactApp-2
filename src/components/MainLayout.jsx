import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import SideTab from './SideTab'
import SideTab2 from './SideTab2'
import Navbar from './Navbar'

function MainLayout() {
  return (
    <>
        <ScrollRestoration
            getKey = {(location) => location.pathname}
        />
        <Navbar/>
        <div className='homee'>
            <SideTab/>
            <Outlet/>
            <SideTab2/>
        </div>
    </>
  )
}

export default MainLayout