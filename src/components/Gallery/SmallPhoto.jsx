import React from 'react'

const SmallPhoto = (props) => {
  return (
    <div data-aos="fade-up" className='bg-center bg-cover w-36 h-36 hover:scale-110 hover:shadow-lg' style={{ backgroundImage: `url(${props.image})`}}></div>
  )
}

export default SmallPhoto