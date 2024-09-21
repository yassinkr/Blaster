import React from 'react'
import Form from './Form'
import Logo from './Logo'

const Contact = () => {
  return (
    <section className='w-full h-screen bg-black flex justify-center items-center' id='Games'>
        <div className='w-[70%] h-[50%]  rounded-xl flex flex-col md:flex-row justify-around items-center'>
         <div className=' flex justify-center items-center'>
            <Logo/>
         </div>
        <Form/>
       </div>
    </section>
  )
}

export default Contact