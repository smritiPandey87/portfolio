import React from 'react'

export default function Paracard({para,skills}) {
  return (
    <div className='lg:ml-10 lg:mr-10 ml-5 mr-5'>
        <p className='lg:text-lg font-thin font-poppins mb-4'>{para}</p>
        <h1 >{skills}</h1>
    </div>
  )
}
