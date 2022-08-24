import React from 'react'

const ProtocolItem = (props) => {
  return (
    <div className='flex items-center gap-3'>
      <img src={props.img} alt={props.label} className="w-7" />
      <div className='text-xs text-center'>{props.label}</div>
    </div>
  )
}

export default ProtocolItem