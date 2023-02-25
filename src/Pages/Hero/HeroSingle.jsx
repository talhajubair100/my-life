import React from 'react'
import SingleData from './SingleData'

const HeroSingle = ({hero}) => {

  return (
    
    <div className="card xl:w-80 md:w-auto sm:w-fit bg-base-100 shadow-md">
        <img src={hero.img} alt="" />
        <div className="card-body">
        <h2 className="card-title tracking-[.4em] text-amber-500">{hero.title}</h2>
        
        {
            hero.description.map(desc => <SingleData key={desc.id} desc={desc}></SingleData>)
        }
       
        </div>
    </div>
  )
}

export default HeroSingle
