import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HostNav() {
  const activeStyles = {
    fontWeightBold: "bold",
    textDecoration: "none",
    color: "#161616",
  }

  return (
    <>
    <nav className="host-nav">
        <ul className="host-nav-links">
            <li><NavLink 
             to="." 
             end
             className="host-nav-link"
             style={({isActive}) => isActive ? activeStyles : null }
             >Dashboard</NavLink>
            </li>

            <li><NavLink 
             to="income" 
             className="host-nav-link"
             style={({isActive}) => isActive ? activeStyles : null }
             >Income</NavLink>
            </li>

            <li><NavLink 
             to="vans" 
             className="host-nav-link"
             style={({isActive}) => isActive ? activeStyles : null }
             >Vans</NavLink>
            </li>

            <li><NavLink
             to="reviews" 
             className="host-nav-link"
             style={({isActive}) => isActive ? activeStyles : null } >Reviews</NavLink>
            </li>
        </ul>
    </nav>
    
    </>
  )
}
