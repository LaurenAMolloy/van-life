import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <nav className="nav">
        <li><Link to="/" className="logo">#VANLIFE</Link></li>
        <ul className="nav-links">
            <li><NavLink to="host" 
            className={({isActive }) => isActive ? "active-link" : null}>Host</NavLink></li>
            <li><NavLink to="about"
             className={({isActive }) => isActive ? "active-link" : null}>About</NavLink></li>
            <li><NavLink to="vans" 
            className={({isActive }) => isActive ? "active-link" : null}>Vans</NavLink></li>
        </ul>
    </nav>
    </>
  )
}
