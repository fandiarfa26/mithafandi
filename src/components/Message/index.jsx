import React, { useCallback, useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import flower1 from '../../assets/images/flower1.png'
import MessageCount from './Count'
import MessageForm from './Form'
import MessageList from './List'
import db from '../../firebase';

const Message = ({invitee}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [count, setCount] = useState({});

  const getMessages = useCallback(async () => {
    setLoading(true);
    try {
      const allMessageSnapshot = await getDocs(query(collection(db, 'messages'), where('deleted', '==', false), orderBy('date', 'desc')));
      
      // if (allMessageSnapshot.empty) {
      //   setData([]);
      //   setCount({all: 0, present: 0, notpresent: 0});
      // } else {
        setData(allMessageSnapshot.docs);
        const presentSnapshot = await getDocs(query(collection(db, 'messages'), where('deleted', '==', false), where('confirm', '==', 'Hadir')));
        setCount({
          all: allMessageSnapshot.size, 
          present: presentSnapshot.size, 
          notpresent: allMessageSnapshot.size - presentSnapshot.size,
        });
      //}
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }, []);

  const loadMessages = () => {
    if (loading) {
      return <div className='py-4 text-center'>Tunggu bentar yaa...</div>
    }
    return <MessageList data={data} code={invitee.code} getMessages={getMessages}/>
  }

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <div id="messages" className='relative flex flex-col items-start justify-center w-full gap-5 py-10 lg:py-20 lg:px-10 lg:flex-row'>
      <div className='w-full p-3 border-4 border-white shadow-xl lg:p-6 lg:w-1/2 bg-coklat-dark bg-opacity-20'>
        <div className='mb-2 text-xl font-bree '>Ucapan</div>
        <div className="pr-16 mb-5 text-sm">Berikan ucapan terbaik untuk kedua mempelai.</div>
        <MessageForm invitee={invitee} getMessages={getMessages}/>
      </div>
      <div className='w-full border-4 border-white shadow-xl lg:translate-y-20 lg:w-1/2 bg-coklat-dark bg-opacity-20'>
        <div className="flex justify-center my-5">
          <MessageCount count={count}/>
        </div>
        { loadMessages() }
      </div>
      <img src={flower1} alt="Flower1" className='absolute h-32 lg:h-48 top-5 -right-10' />
    </div>
  )

}

export default Message