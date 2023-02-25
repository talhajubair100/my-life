import React from 'react'

const Trip = ({trip}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
    <img src={trip.img} alt="" />
    <div className="card-body">
        <h2 className="card-title text-green-700">{trip.country}</h2>
        <small className="card-text">{trip.period}</small>
        </div>
        
    </div>
  )
}

export default Trip
