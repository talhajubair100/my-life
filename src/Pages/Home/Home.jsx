import React from 'react'
import Banks from '../Banks/Banks'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Savings from '../SavingDeal/Savings'
import Subscribe from '../Subscribe/Subscribe'
import Trips from '../Trips/Trips'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Savings></Savings>
      <Subscribe></Subscribe>
      <Trips></Trips>
      <Banks></Banks>
      <Footer></Footer>
    </div>
  )
}

export default Home
