import React from 'react'
import TripData from './Data.jsx';
import Trip from './Trip.jsx';


const Trips = () => {
  return (
    <div className="container mx-auto">
       

     <div className="my-20 mx-auto max-w-screen-lg">
          <div className="flex flex-nowrap">
            <div className='basis-3/4 text-3xl text-gray-500 font-semibold'>Inspiration for your next trip</div>
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
              TripData.map(trip => <Trip key={trip.id} trip={trip}></Trip>)
            }
          </div>

        </div>


    </div>
  )
}

export default Trips
