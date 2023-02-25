import React from 'react'
import HeroData from './HeroData.jsx';
import HeroSingle from './HeroSingle.jsx';

const Hero = () => {
  return (
    <div className="container mx-auto">
    <div className="mt-20">
    <div className='mx-auto max-w-screen-lg	 grid lg:grid-cols-3 md:grid-cols-3 gap-6'>
    {
        HeroData.map(hero => <HeroSingle key={hero.id} hero={hero}></HeroSingle>)
    }
        
    </div>
    </div>
    </div>
  )
}

export default Hero
