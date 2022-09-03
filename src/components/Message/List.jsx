import React from 'react'
import MessageItem from './Item'

const MessageList = ({data, code, getMessages}) => {
  
    if (data.length === 0) {
      return <div>Tidak ada ucapan.</div>
    } else {
      return (
        
        <div className='w-full overflow-y-scroll shadow-inner max-h-128 no-scrollbar'>
          {
            data.map((item, i) => <MessageItem key={i} message={item} code={code} getMessages={getMessages}/>)
          }
        </div>
        
      )
    }
  
}

export default MessageList