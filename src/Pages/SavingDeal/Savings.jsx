import React from 'react'
import DealData from './Data.jsx';
import Saving from './Saving.jsx';

const Savings = () => {
  return (
    <div className="container mx-auto">
      
        <div className="my-20 mx-auto max-w-screen-lg">
          <div className="flex flex-nowrap">
            <div className='basis-3/4 text-3xl text-gray-500 font-semibold'>Our Savings Deal</div>
            <div className="basis-1/5 text-left pl-32 text-gray-500">Show All</div>
            <div className="pt-2">
              <img src="icons/left.png" alt="" />
            </div>
            <div className="pt-2 ml-2">
              <img src="icons/right.png" alt="" />

            </div>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-12 gap-4">
            {
              DealData.map(deal => <Saving key={deal.id} deal={deal}></Saving>)
            }
          </div>

        </div>
      </div>

  )
}

export default Savings
