import React from 'react'

const CountItem = (props) => {
  return (
    <div className='px-3 py-1 text-xs bg-white'>
      <span className='font-semibold'>{props.count}</span> {props.label}
    </div>
  )
}

export default CountItem