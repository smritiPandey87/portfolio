

import React from 'react'
import logo from "../assets/logo2.png"

export default function Home() {
  return (
    <div  id ="home" className='w-full lg:h-screen h-[600px] '>
        <img className=' lg:w-full lg:h-full h-[600px]
        opacity-5 absolute z-10 bg-cover bg-center w-[800px] scale-100  ' src={logo}/>
        <div className=' relative lg:top-32 lg:left-34 top-60 left-20  z-0'>
            <h1 className='lg:text-8xl text-6xl font-semibold font-mono'>HELLO,✌️</h1>
            <h2 className='lg:text-5xl text-4xl mt-5 mb-5'>I'm Smriti</h2>
            <p className='lg:text-2xl text-lg font-extralight'>A commited Front-end developer</p>
        </div>
        
    </div>
  )

}
