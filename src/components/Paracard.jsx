import React from 'react'

export default function Paracard({para,skills}) {
  return (
    <div className='ml-10 mr-10'>
        <p className='text-lg font-thin mb-4'>{para}</p>
        <h1 >{skills}</h1>
    </div>
  )
}
