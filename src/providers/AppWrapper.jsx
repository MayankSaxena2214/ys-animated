"use client"
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { store } from '@/redux/store'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

const AppWrapper = ({children}) => {
  return (
    <Provider store={store}>
      <Toaster/>
        <Navbar/>
        {children}
        <Footer/>
    </Provider>
  )
}

export default AppWrapper
