import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
    <div className="container mx-auto">
    <footer className="footer p-10 bg-base-200 text-base-content mx-auto max-w-screen-lg">

    <div>
        <span className="text-3xl text-white">Need Help With</span> 
        <span className="text-3xl text-green-500">Anything ?</span> 
        <p className='text-lg text-white'>We Are Here To Support You!</p>
        <button className="btn rounded-full hover:bg-orange-600 text-white my-6 bg-orange-500 border-none">Contact Us</button>
    </div>


        <div>
            
            <p className="footer-title border-b">Booking</p> 
           
            <Link to='' className="link link-hover">Add New Account</Link> 
            <Link to='' className="link link-hover">My Account</Link> 
            <Link to='' className="link link-hover">My savings</Link> 
            <Link to='' className="link link-hover">Add new cards</Link>
            <Link to='' className="link link-hover">My cards</Link>

        </div> 
        <div>
            <span className="footer-title border-b">Insurance</span> 
            <Link to='' className="link link-hover">Home Insurance</Link> 
            <Link to='' className="link link-hover">Mobility Insurance</Link> 
            <Link to='' className="link link-hover">Travel Insurance</Link> 
        </div> 
        <div>
            <span className="footer-title border-b">Traveling</span> 
            <Link to='' className="link link-hover">Add new booking</Link> 
            <Link to='' className="link link-hover">My booking</Link> 
            <Link to='' className="link link-hover">Plan & roots</Link>
        </div>
        <div>
            <span className="footer-title border-b">More</span> 
            <Link to='' className="link link-hover">About Us</Link> 
            <Link to='' className="link link-hover">Send email</Link> 
            <Link to='' className="link link-hover">Blog</Link>
            <Link to='' className="link link-hover">FAQ</Link>
            <Link to='' className="link link-hover">Service policy</Link>

        </div>
  

    </footer>

        <footer className="footer py-4  bg-base-200 text-base-content border-base-300 mx-auto max-w-screen-lg">
        <div className="items-center grid-flow-col">
            <img src="Logo.png" alt="" />
            
        </div> 
        <div className="md:place-self-center">
            <div className="grid grid-flow-col gap-4">
        
            <Link to=''><img src="playstore.png" alt="" /></Link>
            <div className="mt-4 flex gap-2">
            <Link to=''><img src="icons/fb.png" alt="" /></Link>
            <Link to=''><img src="icons/insta.png" alt="" /></Link>
            <Link to=''><img src="icons/linkdin.png" alt="" /></Link>
            <Link to=''><img src="icons/yt.png" alt="" /></Link>
            </div>
            </div>
        </div>
        </footer>
    </div>
    </div>
  )
}

export default Footer
