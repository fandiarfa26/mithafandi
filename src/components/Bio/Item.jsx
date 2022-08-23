import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const BioItem = (props) => {
  return (
    <div className='flex flex-col items-center flex-1 w-full gap-3'>
      
      <img src={props.pic} alt={props.name} className='h-48 mb-5 border-8 border-white shadow-xl' />
      <div className='text-2xl text-center lg:text-3xl font-handwriting'>{props.name}</div>
      <div className='text-sm text-center'>{props.detail}</div>
      <a href={`https://www.instagram.com/${props.instagram}/`} target="_blank" rel='noreferrer' className='flex items-center gap-2 px-4 py-2 text-sm border-2 border-transparent hover:border-coklat-dark'>
        <FaInstagram className='w-5 h-5'/>
        <span>{props.instagram}</span>
      </a>
    </div>
  )
}

export default BioItem