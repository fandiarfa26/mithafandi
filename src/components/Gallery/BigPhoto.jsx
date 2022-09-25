import React from 'react'

const BigPhoto = (props) => {
  return (
    <div data-aos="fade-up" className='bg-center bg-cover w-72 h-72 hover:scale-110 hover:shadow-lg' style={{ backgroundImage: `url(${props.image})`}}></div>
  )
}

export default BigPhoto