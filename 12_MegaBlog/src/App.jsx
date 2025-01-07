import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
   // way to call ENV
  // this will not work as we have used VITE
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  // making of states
  // loading state
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

// using serives
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  
  // loading fals
  return !loading ? (//false
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null //if loading true then null
}

export default App