import React from 'react'
import './Bank.css'
import BankData from './Data.jsx'
const Banks = () => {
  return (
    <div className='section md:block hidden'>
      <h1 className='text-3xl text-green-700 font-semibold tracking-[.05em]'>Our Remunerative <span className='text-orange-500'>Banks</span> </h1>
      <div className="flex justify-center gap-20 pt-20">
        {
            BankData.map(bank => <img key={bank.id} src={bank.img} alt="" style={{ height:"50px" }} />)
        }
      </div>
      
    </div>

  )
}

export default Banks
