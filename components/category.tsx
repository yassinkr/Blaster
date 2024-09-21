import React from 'react'
import "./category.css"
type Category = {
    title:string,
    description:string,
    icon:string
}
const category = ({category ,index}:{category :Category , index : number}) => {
    const animations = ["ellipse-move", "circle-move", "bounce"];
    const animate = animations[index ];
    
    
  return (
    <div className={`flex justify-center items-center gap-10 w-[350px] h-[140px] px-3 py-5 rounded-xl bg-white ${animate} ${index % 2 === 0 ? "left-10": "right-10" }`}>
   

        <div className='rounded-full bg-gray w-[100px] h-[100px] flex justify-center items-center p-2'>
            <img src={category.icon} alt={category.title}/>
        </div>
        <div className='flex flex-col justify-center items-start w-[200px] text-black font-mono' >
            <h1 className='font-semibold'>{category.title}</h1>
            <p className='text-xs'>{category.description}</p>
        </div>
    </div>

     )
}

export default category