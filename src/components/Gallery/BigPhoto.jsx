import React from 'react'

const BigPhoto = (props) => {
  return (
    <div className='bg-center bg-cover hover:border-4 hover:border-white w-72 h-72 hover:scale-110 hover:shadow-lg' style={{ backgroundImage: `url(${props.image})`}}></div>
  )
}

export default BigPhoto