import React from 'react'
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <div className='mt-32 mb-32'>
        <a className=" text-xl  ml-4 flex justify-center items-center" href="#">
                  <div className="mr-3">
                    <img className="w-16 rounded-lg" src={logo} />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                 <div>
                    <span className="text-2xl font-serif ">S</span>
                    <span className="text-start text-lg">mriti </span>
                  </div>
                  <span className="text-[12px] font-medium">WEB DEVELOPER </span>
                  </div>
                  
                </a>

                <p className=' text-center text-sm font-thin mt-5'>COPYRIGHT © 2025, SMRITI</p>
    </div>
  )
}
