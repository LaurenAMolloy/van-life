import React from 'react'
import { useState, useEffect } from 'react';

export default function ListedVans() {
    const [hostVans, setHostVans] = useState([]);

    //useEffect to grab the host vans data
    useEffect(() => {
        fetch(`/api/host/vans`)
        .then(res => res.json())
        .then(data => setHostVans(data.vans))
    },[]);

    //map over vans
    const listedVans = hostVans.map(van =>
     <div key={van.id} className="listed-van">
        <img src={van.imageUrl} alt={van.name}></img>
        <div className="listed-van-name">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
     </div>
    )

  return (
    <>
    <h1 className="list-title">Your Listed Vans</h1>
    <div className="listed-van-container">
    {hostVans.length > 0 ? listedVans : <h2>Loading...</h2>}
    </div>
    </>
  )
}
