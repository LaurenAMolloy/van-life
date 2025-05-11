import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
        <li><Link to="/home" className="logo">#VANLIFE</Link></li>
        <ul className="nav-links">
            <li><Link to="/host" className="nav-link">Host</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/vans" className="nav-link" onClick={() => console.log('Clicked Vans')}>Vans</Link></li>
        </ul>
    </nav>
  )
}
