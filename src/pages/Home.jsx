

import React from 'react'
import logo from "../assets/logo2.png"

export default function Home() {
  return (
    <div  id ="home" className='w-full h-screen '>
        <img className=' w-full h-full opacity-5 absolute z-10' src={logo}/>
        <div className=' relative top-48 left-34 z-0'>
            <h1 className='text-8xl font-semibold font-mono'>HELLO,✌️</h1>
            <h2 className='text-5xl mt-5 mb-5'>I'm Smriti</h2>
            <p className='text-2xl font-extralight'>A commited Front-end developer</p>
        </div>
        
    </div>
  )

}
