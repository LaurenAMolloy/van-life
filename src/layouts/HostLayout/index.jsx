import React from 'react'
import HostNav from '../../components/HostNav'
import { Outlet } from 'react-router-dom'



export default function HostLayout() {
  return (
    <div className="host-layout">
    <HostNav />
        <Outlet />
    </div>
  )
}
