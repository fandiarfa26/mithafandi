import React from 'react'
import MessageCount from './Count'
import MessageForm from './Form'
import MessageList from './List'

const Message = () => {
  return (
    <div>
      <MessageCount/>
      <hr />
      <MessageForm/>
      <hr />
      <MessageList/>
    </div>
  )
}

export default Message