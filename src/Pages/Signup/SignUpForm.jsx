import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const SignUpForm = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <form class="bg-white">
                <h1 class="text-gray-800 font-bold text-3xl mb-4">Sign Up</h1>

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

                <div class="flex -mx-3 ">
                    <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-semibold px-1">
                            First name
                        </label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                                type="text"
                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                placeholder="First name"
                            />
                        </div>
                    </div>
                    <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-semibold px-1">
                            Last name
                        </label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                                type="text"
                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                placeholder="Last name"
                            />
                        </div>
                    </div>
                </div>

                <label for="" class="font-semibold px-1">
                    Phone Number
                </label>
                <div class="flex mb-4">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn"
                            style={{ width: "82px", height: "50px" }}
                        >
                            <img src="images.png" alt="" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box h-96 overflow-y-scroll"
                        >
                            {countries.map((country) => (
                                <li style={{ width: "82px", height: "50px" }}>
                                    <a href>
                                        <img src={country.flags.png} alt="" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                    <input
                        type="phone"
                        class="w-full -ml-10 pl-10 pr-3 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="Phone Number"
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

                <div className="flex mt-2 mb-4">
                    <input
                        id="checkbox"
                        type="checkbox"
                        value=""
                        class="w-6 h-6 mt-3 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 focus:ring-2 dark:bg-green-700 dark:border-green-600 accent-green-600"
                    />
                    <label for="" class="text-lg mt-3 px-3">
                        Yes, i’m agree with the{" "}
                        <span className="text-green-600">Terms of conditions</span> &{" "}
                        <span className="text-green-600">Service policy</span>
                    </label>
                </div>

                <button
                    type="submit"
                    class="block w-full bg-green-600 hover:bg-green-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                >
                    Sign Up
                </button>
                <div className="mt-4">
                    <span>Already Have an Account ?</span>
                    <Link to="/login">
                    <span class="text-lg font-semibold ml-2 text-green-500 cursor-pointer">
                        Login
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
    );
};

export default SignUpForm;
