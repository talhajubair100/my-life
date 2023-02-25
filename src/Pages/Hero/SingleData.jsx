import React from 'react'

const SingleData = ({desc}) => {
  return (
    
    <div className="card-actions ml-2 hover:bg-green-50">
        <div className="mt-4">
        <img src={desc.icon} alt="" />
        </div>
        
        <div className="ml-6 pb-2 pt-2">
        <p className='text-green-700 font-semibold'>{desc.title}</p>
        <small>{desc.text}</small>
        </div>
    </div>
    
  )
}

export default SingleData
