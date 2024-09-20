import Games from '@/components/Games'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col justify-center items-center relative'>
     <Header/>
     <Hero/>
     <Games/>
    </div>
  )
}

export default page