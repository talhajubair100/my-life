import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex">
    <div className="m-3">
    <NavLink className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' to={'/'}>Home</NavLink>
    </div>
      <div className="m-3">
      <NavLink className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' to={'/signup'}>SignUp</NavLink>
      </div>
    </div>
  )
}

export default Header
