import React from 'react'
import Header from '../main/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../main/footer/Footer'

function MainRoute() {
  return (
   <div className='main-route'>
    <div className='header'>
      <Header/>
    </div>
    <div className='content'>
       <Outlet/>
    </div>
    <div className='footer'>
       <Footer/>
    </div>
   </div>
  )
}

export default MainRoute