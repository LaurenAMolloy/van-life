import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function HostVans() {
    const [hostVans, setHostVans] = useState([]);

    //useEffect to grab the host vans data
    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setHostVans(data.vans))
    },[]);
     
    //map over vans
    const listedVans = hostVans.map(van => (
      <Link 
          to={`/host/vans/${van.id}`}
          key={van.id}
          className="listed-van"
      >
        <img src={van.imageUrl} alt={van.name}></img>
        <div className="listedname">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
      </Link>
    ))

  return (
    <>
    <h1 className="list-title">Your listed vans</h1>
    <div className="listed-van-container">
    {hostVans.length > 0 ? listedVans : <h2>Loading your vans...</h2>}
    </div>
    </>
  )
}
