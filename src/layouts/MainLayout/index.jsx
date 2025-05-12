import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
    <div className="layout-container">
     <Nav />
     <main>
        <Outlet />
     </main>
     <Footer />
    </div>
    </>
  )
}
