import React from 'react'
import { Link } from 'react-router-dom'
import './Sucscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <h1 className='text-4xl text-white font-semibold tracking-[.05em]'>Get In Touch</h1>
        <p className='text-white text-xl mt-4'>Subscribe us for new offerings and travel packages</p>

        <div className="mt-16">
            <input type="text" className='input bg-white w-full max-w-xs rounded-full border-none' placeholder="your Email" />
            <Link to='/' className='btn rounded-full font-thin -ml-10 hover:bg-orange-500 bg-orange-500 border-0 text-white subsbtn'>Subscribe</Link>
        </div>
    </div>
  )
}

export default Subscribe
