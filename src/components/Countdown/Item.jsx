import React from 'react'

const CountdownItem = ({num, label}) => {
  return (
    <div className='text-center'>
      <div className='text-3xl font-semibold lg:text-5xl'>{("0" + num).slice(-2)}</div>
      <div className='lg:text-lg'>{label}</div>
    </div>
  )
}

export default CountdownItem