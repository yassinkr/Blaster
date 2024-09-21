import React from 'react'
import Form from './Form'
import Logo from './Logo'

const Contact = () => {
  return (
    <section className='w-full h-screen bg-black flex justify-center items-center' id='Contact'>
        <div className='w-[70%] h-[50%]  rounded-xl flex flex-col md:flex-row justify-between items-center'>
         <div className=' flex flex-col justify-center items-start h-full gap-5'>
            <Logo/>
            <div className='flex flex-col justify-start w-1/2 md:w-1/3 h-fit text-white font-mono '>
    <p className='text-[16px] font-sans font-semibold w-full whitespace-nowrap'>To Remember The Old Times</p>
    <h1 className='text-[32px] w-full md:whitespace-nowrap'>send us your feedback  </h1>
    <h1 className='text-[32px] w-full md:whitespace-nowrap'>you will make blaster better </h1>
    <h1 className='text-[32px] w-full md:whitespace-nowrap'>we appreciate every contribution  </h1>
    </div>
         </div>
        <Form/>
       </div>
    </section>
  )
}

export default Contact