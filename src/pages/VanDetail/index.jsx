import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
 
export default function VanDetail() {
  const params = useParams()
  const [van, setVans] = useState(null)

  //use effect to grab id
  useEffect(() =>{
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVans(data.vans))

  }, [params.id])

  return (
    <div className ="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl}></img>
          <i className ={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price"><span>${van.price}</span>/day</p>
          <p>{van.description}</p>
        </div>

      ) : <h2>Loading...</h2>}
    </div>
  )
}
