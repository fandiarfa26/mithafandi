import React from 'react'
import CountItem from './CountItem'

const MessageCount = ({count}) => {
  return (
    <div className='flex items-center gap-2'>
      <CountItem
        count={count.all !== undefined ? count.all : '?'}
        label="ucapan" />
      <CountItem
        count={count.present !== undefined ? count.present : '?'}
        label="hadir" />
      <CountItem
        count={count.notpresent !== undefined ? count.notpresent : '?'}
        label="tidak hadir" />
    </div>
  )
}

export default MessageCount