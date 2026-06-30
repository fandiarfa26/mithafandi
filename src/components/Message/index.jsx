import React, { useState } from 'react'

import flower1 from '../../assets/images/flower1.png'
import MessageCount from './Count'
import MessageForm from './Form'
import MessageList from './List'

const Message = ({invitee}) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (data) => {
    const newMessage = {
      id: (+new Date()).toString(),
      name: data.name,
      message: data.message,
      confirm: data.confirm,
      inviteeCode: invitee.code,
      date: new Date().toISOString(),
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  const deleteMessage = (id) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const presentCount = messages.filter(m => m.confirm === 'Hadir').length;
  const count = {
    all: messages.length,
    present: presentCount,
    notpresent: messages.length - presentCount,
  };

  return (
    <div id="messages" className='relative flex flex-col items-start justify-center w-full gap-5 py-10 lg:py-20 lg:px-10 lg:flex-row'>
      <div className='w-full p-3 border-4 border-white shadow-xl lg:p-6 lg:w-1/2 bg-coklat-dark bg-opacity-20'>
        <div className='mb-2 text-xl font-bree '>Ucapan</div>
        <div className="pr-16 mb-5 text-sm">Berikan ucapan terbaik untuk kedua mempelai.</div>
        <MessageForm invitee={invitee} onSubmit={addMessage}/>
      </div>
      <div className='w-full border-4 border-white shadow-xl lg:translate-y-20 lg:w-1/2 bg-coklat-dark bg-opacity-20'>
        <div className="flex justify-center my-5">
          <MessageCount count={count}/>
        </div>
        <MessageList data={messages} code={invitee.code} onDelete={deleteMessage}/>
      </div>
      <img src={flower1} alt="Flower1" className='absolute h-32 lg:h-48 top-5 -right-10' />
    </div>
  )

}

export default Message
