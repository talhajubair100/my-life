import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (

    <div className="container mx-auto">
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box bg-slate-200">
          <li className='text-green-700'><NavLink to={'/'}> <img style={{height:"22px"}} src="icons/credit-card.png" alt="" />Banking</NavLink></li>
          <li className='text-green-700'><NavLink to={'/'}> <img style={{height:"22px"}} src="icons/shield.png" alt="" />Insurance</NavLink></li>
          <li className='text-green-700'><NavLink to={'/'}> <img style={{height:"22px"}} src="icons/Plane.png" alt="" />Travel</NavLink></li>
          <li className='text-green-700'><NavLink to={'/login'}> <img style={{height:"22px"}} src="icons/user-plus.png" alt="" />My Profile</NavLink></li>
          </ul>
        </div>
        <Link to="" className="btn btn-ghost normal-case text-xl"><img src="Logo.png" alt="" /></Link>
      </div>

      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li className='text-green-700 hover:text-amber-500 font-semibold bank'><p className=''></p><NavLink to={'/'}> Banking</NavLink></li>
          <li className='text-green-700 hover:text-amber-500 font-semibold shield'><p className=''></p><NavLink to={'/'}> Insurance</NavLink></li>
          <li className='text-green-700 hover:text-amber-500 font-semibold plane'><p className=''></p><NavLink to={'/'}> Travel</NavLink></li>
          <li className='text-green-700 hover:text-amber-500 font-semibold user'><p className=''></p><NavLink to={'/login'}> My Profile</NavLink></li>
        </ul>
      </div>
      <div className="mr-20 navbar-end">
      <button className="btn btn-ghost btn-circle text-green-700 hover:text-green-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      </div>
    </div>
    </div>
  )
}

export default Header
