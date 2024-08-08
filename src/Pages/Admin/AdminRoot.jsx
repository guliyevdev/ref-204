import React from 'react'
import AdminHome from './AdminHome'
import { Outlet } from 'react-router'
import Footer from '../../Layout/Admin/Footer'
import Header from '../../Layout/Admin/Header'

const AdminRoot = () => {
    // helllo world
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default AdminRoot
