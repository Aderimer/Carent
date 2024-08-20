import Image from 'next/image'
import React from 'react'
import HeroForm from './HeroForm'

const Hero = () => {
  return (
    <>
    <div className='flex w-full h-gorilla gap-3 relative bottom-5'>
      <Image className='object-cover z-[-1]' src='/road.jpg' alt='road' height={100} width={2000} style={{ width: '100%', height: 'auto' }}/>
    </div>

    <HeroForm />

    <div className='absolute top-72 text-white font-extrabold h-10 w-fit left-72'>
      <h1 className='text-8xl'>Carent™</h1>
      <h2 className='relative top-2 text-4xl'>Dårlige sjåfører fortjener også eventyr.</h2>
    </div>

    </>
  )
}

export default Hero