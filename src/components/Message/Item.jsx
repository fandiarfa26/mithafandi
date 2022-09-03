import React, { useState } from 'react'
import moment from 'moment'
import 'moment/min/locales'
import { doc, updateDoc } from 'firebase/firestore';
import db from '../../firebase';
import { FiRefreshCw, FiTrash2 } from 'react-icons/fi';

const MessageItem = ({message, code, getMessages}) => {
  const [loading, setLoading] = useState(false);

  const getDiffTime = (date) => {
    var dt = moment(date.toDate());
    moment.locale('id');
    return dt.startOf('hour').fromNow();
  }

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "messages", id), {
        deleted: true,
      });
      getMessages();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const loadDeleteBtn = () => {
    if (loading) {
      return (
        <span className='absolute top-0 right-0 p-2 text-white bg-red-600'>
            <FiRefreshCw className='w-4 h-4 animate-spin'/>
          </span>
      )
    }
    if (message.data().invitee.id === code) {
      return (
        <span className='absolute top-0 right-0 p-2 text-white bg-red-400 cursor-pointer hover:bg-red-600' onClick={() => handleDelete(message.id)}>
          <FiTrash2 className='w-4 h-4'/>
        </span>
      )
    }

    return <></>
  }

  return (
    
      <div className='flex items-start w-full px-4 py-2'>
        <div className="items-center justify-center hidden w-10 h-10 text-xl text-white lg:flex bg-coklat-dark drop-shadow-lg">{message.data().name.charAt(0).toUpperCase()}</div>
        <div className="relative flex-1 p-3 bg-white border-2 border-coklat-dark drop-shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
            <div className="text-sm">{message.data().name}</div>
            <div className="self-start px-2 text-xs text-white lg:self-auto bg-coklat-dark">{message.data().confirm}</div>
          </div>
          <div className="mt-2 text-xs text-slate-400">{getDiffTime(message.data().date)}</div>
          <div className="text-sm">{message.data().message}</div>
          {
            loadDeleteBtn()
          }
        </div>
        
      </div>
  )
}

export default MessageItem