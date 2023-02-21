import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div>
    <form class="bg-white">
    <h1 class="text-gray-800 font-bold text-3xl mb-4">Log In</h1>

    <label for="" class="font-semibold px-1">
        Your Email
    </label>
    <div class="flex mb-4">
        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
        <input
            type="email"
            required
            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
            placeholder="Your Email"
        />
    </div>

    <label for="" class="font-semibold px-1">
        Password
    </label>
    <div class="flex mb-4">
        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
        <input
            type="password"
            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
            placeholder="Your Password"
        />
    </div>


    <button type="submit" class="block w-full bg-green-600 hover:bg-green-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
        Login
    </button>
    <div className="mt-4">
        <span>Don't Have accoutn ?</span>
        <Link to="/signup">
        <span class="text-lg font-semibold ml-2 text-green-500 cursor-pointer">
            Create new account
        </span>
        </Link>
    </div>

    <div className="flex mt-5">
        <div className="w-2/4 mr-4">
            <a
                href
                class="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center text- transition-colors duration-200 transform border rounded-lg"
            >
                <img
                    src="fb_icon.png"
                    alt=""
                    style={{ height: "36px", width: "36px" }}
                    className=""
                />
                <span class="text-sm">Sign Up With Facebook</span>
            </a>
        </div>

        <div className="w-2/4">
            <a
                href
                class="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center text- transition-colors duration-200 transform border rounded-lg"
            >
                <img
                    src="google.png"
                    alt=""
                    style={{ height: "36px", width: "36px" }}
                    className=""
                />
                <span class="text-sm">Sign Up With Google</span>
            </a>
        </div>
    </div>
</form>
    </div>
  )
}

export default LoginForm
