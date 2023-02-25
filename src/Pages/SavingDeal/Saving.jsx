import React from 'react'
import SavingDes from './SavingDes'

const Saving = ({deal}) => {
  return (
        <div className="card bg-base-100 shadow-xl pt-4 pb-4">
        <div className="ml-6 mt-4">
        <img src={deal.img} alt="" style={{height:'60px', width:'180px'}} />
        </div>

        {
            deal.description.map(desc => <SavingDes key={desc.id} desc={desc}></SavingDes>)
        }
       
        <div className="ml-10 mt-6 card-actions">
            <button className="btn btn-outline border-green-700 text-green-700 hover:border-green-700 hover:bg-green-700 hover:text-white">Explore</button>
        </div>
    </div>
  )
}

export default Saving
