import React from 'react'

const SavingDes = ({desc}) => {
  return (
    
    <div className="mx-10 mt-4">
        <div className="flex justify-between">
            <div className="font-semibold text-gray-500">{desc.title} : </div> 
            <div className="">{desc.text}</div>
        </div>
    </div>
  )
}

export default SavingDes
