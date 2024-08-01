import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  let x = createBrowserRouter([
    {path:"",element:<Layout/> , children : [
      {path:"" , element: <Home/>},
      {path:"about" , element: <About/>},
      {path:"portfolio" , element: <Portfolio/>},
      {path:"contact" , element:<Contact/>}
    ]}
  ])
  return (
    <RouterProvider router={x}>

    </RouterProvider>
  )
}

export default App
