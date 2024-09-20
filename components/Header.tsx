import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='w-full h-fit flex justify-around items-end bg-white'>
     <Logo/>
     <Nav/>
     <Button className='mb-2'>
        Contribute
     </Button>
    </header>
  )
}

export default Header