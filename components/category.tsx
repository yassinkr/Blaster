import React from 'react'
type Category = {
    title:string,
    description:string,
    icon:string
}
const category = ({category}:{category :Category}) => {
  return (
    <div className={`flex justify-center items-center gap-10 w-[350px] h-fit rounded-xl bg-white`}>
   

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