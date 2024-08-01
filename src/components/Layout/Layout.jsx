import React from 'react'
import Navigate from '../Navigate/Navigate'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

export default function Layout() {
  return (
    <div>
      <Navigate/>
      <Outlet></Outlet>
      <Footer/> 
    </div>
  )
}
