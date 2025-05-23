import React from 'react'

export default function Imgcard({src}) {
  return (
    <img className='lg:w-[700px] lg:ml-10 rounded-2xl h-[200px] lg:h-[350px] w-[360px] shadow-lg shadow-gray-500' src={src}/>
  )
}
