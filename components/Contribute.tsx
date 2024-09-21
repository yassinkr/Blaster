import React from 'react'
import { Button } from './ui/button'

const Contribute = () => {
  return (
    <section className='w-full h-screen bg-black flex justify-center items-center' id='About'>
        <div className='w-[70%] h-[50%] bg-white rounded-xl flex flex-col md:flex-row justify-around items-center'>
            
    <div className='flex flex-col justify-start w-1/2 md:w-1/3 h-fit text-blue font-mono '>
    <p className='text-[16px] font-sans font-semibold w-full md:whitespace-nowrap'>To Remember The Old Times</p>
    <h1 className='text-[32px] text-red w-full md:whitespace-nowrap'>Blaster </h1>
    <h1 className='text-[32px] w-full md:whitespace-nowrap'>for the games community </h1>
    <h1 className='text-[32px] w-full md:whitespace-nowrap'>the OGs who want to contribute </h1>
    <Button className='w-1/3 mt-5 px-6 '>Contribute</Button>
    </div>
            <div className='w-1/4 h-full flex justify-center items-center'>
                <img src='./Team work.svg' alt="Team Work" />
            </div>
        </div>
    </section>
  )
}

export default Contribute
