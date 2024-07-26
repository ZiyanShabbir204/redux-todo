import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Users from './components/Users'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetail from './components/UserDetail'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Users/>

  },{
    path:"/userdetail",
    element:<UserDetail/>
  }])

  return (
    <>
     <h1>Extracting Data From Json Placeholder</h1>
     <RouterProvider router={router}/>
    </>
  )
}


export default App
