import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const BioItem = (props) => {
  return (
    <div className='flex flex-col items-center w-full gap-3'>
      
      <img data-aos="flip-right" data-aos-duration="1500" src={props.pic} alt={props.name} className='mb-5 border-4 border-white shadow-xl h-36 lg:border-8 lg:h-48' />
      <div data-aos="fade-up" className='mb-3 text-2xl text-center lg:text-3xl font-handwriting'>{props.name}</div>
      
      
      <a data-aos="fade-up" href={`https://www.instagram.com/${props.instagram}/`} target="_blank" rel='noreferrer' className='flex items-center gap-2 px-4 py-2 text-sm border-2 border-coklat-dark hover:border-ijo-dark hover:bg-ijo-light'>
        <FaInstagram className='w-5 h-5'/>
        <span>{props.instagram}</span>
      </a>
    </div>
  )
}

export default BioItem