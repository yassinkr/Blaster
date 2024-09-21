import React from 'react'
import { Button } from './ui/button'
const Hero = () => {
  return (
    <section id='Home' className='w-full h-screen bg-black flex justify-center items-center'>
    <div className='w-[80%] h-[80%] md:h-[50%] flex flex-col md:flex-row md:px-10 justify-around items-center pl-2 md:justify-between md:items-center bg-white rounded-md '>

    <div className='flex flex-col justify-start w-full md:w-1/3 h-fit text-blue font-mono '>
    <p className='text-[16px] font-sans font-semibold'>To Remember The Old Times</p>
    <h1 className='text-[32px] text-red'>Blaster </h1>
    <h1 className='text-[32px]'>Unlimited Adventure</h1>
    <h1 className='text-[32px]'>Nostalgie , Fun , Smoothness</h1>
    <Button className='w-1/5 mt-5'>Explore</Button>
    </div>
    <div className='w-[70%] md:w-1/3 flex justify-center items-center'>
    <img src='/Saly-38.svg' alt='hero' />
    </div>
    </div>
    </section>
  )
}

export default Hero