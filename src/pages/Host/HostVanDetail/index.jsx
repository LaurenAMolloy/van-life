import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link,Outlet } from 'react-router-dom'


export default function HostVanDetail() {
    //grab the destructured params for the dynamic id value
    const params = useParams()
    console.log(params)
    //setstate for current van
    const [currentVan, setCurrentVan] = useState(null)
    
    //Move away from usEffect to get data?
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    },[])

    console.log("Fetching")

    //Add real loading state at a later date!
    //Early return incase of no data
    if(!currentVan) {
        return <h1>Loading...</h1>
    }

  return (
    <>
    <section>
            <Link
                to=".."
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
        <Outlet />
        </>
  )
}
