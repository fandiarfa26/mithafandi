import React from 'react'

const SmallPhoto = (props) => {
  return (
    <div  className='bg-center bg-cover w-36 h-36 hover:scale-125 hover:shadow-lg hover:border-4 hover:border-white' style={{ backgroundImage: `url(${props.image})`}}></div>
  )
}

export default SmallPhoto