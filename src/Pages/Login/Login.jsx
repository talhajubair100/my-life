import React from 'react'
import '../Signup/Signup.css'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div>
        <div className="h-screen md:flex">
            <div className="relative overflow-hidden md:flex w-1/2 bg-green justify-center items-center hidden">
                <div className="absolute w-3/4 bg-img xl:-bottom-60 lg:-bottom-40">
                </div>
            </div>
            <div className="flex md:w-1/2 lg:w-1/2 justify-center py-10 items-center bg-white">
            <LoginForm></LoginForm>
            </div>
        </div>
    </div>
  )
}

export default Login
