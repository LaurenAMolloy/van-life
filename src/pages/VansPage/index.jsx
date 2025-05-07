import React from 'react'
import { useEffect, useState } from 'react'

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */


export default function VansPage() {

  const [vans, setVans] =useState([]);

  useEffect(() => {
    fetch("/api/vans")
    .then((res) => res.json())
    .then((data) => console.log(data.vans))
  }, []);


  return (
    <h1>Vans Page Here</h1>
  )
}
