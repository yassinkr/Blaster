import React from 'react'
import Category from './category'
import { title } from 'process'
type Category = {
    title:string,
    description:string,
    icon:string
}
const Games = () => {
    const mockdata : Category[] = [
        {
            title:"Action",
            description:"Action games are a video game genre that emphasizes physical chall.",
            icon:"/trouphy.svg"
        },{
            title:"Adventure",
            description:"An adventure game is a video game in which the player assumes the. ",
            icon:"/chess.svg"
        },{
            title:"Racing",
            description:"Racing video games are a video game genre in which the player part.",
            icon:"/drive.svg"
        }
    ]
  return (
    <section className='w-full h-screen bg-black flex justify-center items-center' id='Games'>
      <div className='w-[80%] h-[70%] flex justify-around items-center flex-col'>

      {mockdata.map((category,index)=>
      <Category category={category} key={index}/>
    )}
        
    </div>
    </section>
  )
}

export default Games