import Contribute from '@/components/Contribute'
import Games from '@/components/Games'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div  className="h-screen  grid grid-rows[auto,1fr] ">
     <Header/>
     <Hero/>
     <Games/>
     <Contribute/>
    </div>
  )
}

export default page