import { Outlet } from 'react-router-dom'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import React from 'react'

const UserTemplate = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserTemplate