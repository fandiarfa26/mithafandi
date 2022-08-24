import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import db from '../../firebase';
import { FiSend, FiTrash2 } from 'react-icons/fi';

const MessageForm = ({invitee, getMessages}) => {
  const [name, setName] = useState(invitee.name);
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (name.trim().length === 0) {
      setError("Nama gk valid!");
    } else if (message.trim().length === 0) {
      setError("Ucapan cuma spasi doang wkwk!");
    } else {
      try {
        const inviteeSnapshot = await getDoc(doc(db, "invitee", invitee.code));
        let new_id = (+new Date()).toString();
        await setDoc(doc(db, "messages", new_id), {
          name: name,
          message: message,
          confirm: confirm,
          invitee: inviteeSnapshot.ref,
          date: serverTimestamp(),
          deleted: false,
        });
        getMessages();
        setName(invitee.name);
        setMessage("");
        setConfirm("");
        setError("");
        setLoading(false);
      } catch (error) {
        setError('Ups, gk bisa mengirim ucapan, coba lagi deh!');
        setLoading(false);
      }
    }
  }

  const loadButton = () => {
    if (loading) {
      return <button type="button" className="px-4 py-2 text-sm border-2 border-coklat-dark hover:border-ijo-dark hover:bg-ijo-light">Mengirim ...</button>
    }
    return (
      <button type="submit" className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-coklat-dark hover:border-ijo-dark hover:bg-ijo-light">
        <span>Kirim ucapan</span>
        <FiSend className='w-5 h-5'/>
      </button>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className='flex flex-col gap-1'>
          <span className='text-sm'>Nama</span>
          <input 
            required
            type="text" 
            id="name" 
            className='px-3 py-1 focus:outline-coklat-dark'
            placeholder="Tulis namamu"
            value={name}
            onChange={ (e) => setName(e.target.value) } />
        </label>
        <label htmlFor="message" className='flex flex-col gap-1'>
          <span className="text-sm">Ucapan</span>
          <textarea 
            required
            id="message" 
            rows="5" 
            className='px-3 py-1 focus:outline-coklat-dark'
            placeholder="Beri ucapan terbaikmu"
            value={message}
            onChange={ (e) => setMessage(e.target.value) } ></textarea>
        </label>
        <label htmlFor="confirm" className='flex flex-col gap-1'>
          <span  className="text-sm">Konfirmasi</span>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center '>
            <label htmlFor="confirm_true" className='flex items-center flex-1 gap-3 px-3 py-1 bg-white border-2 border-white cursor-pointer hover:border-coklat-dark'>
              <input 
                type="radio" 
                id="confirm_true" 
                name="confirm_radio" 
                value="Hadir" 
                className='form-radio'
                checked={confirm === 'Hadir'} 
                onChange={ (e) => setConfirm(e.target.value)} required />
              <span>Hadir</span>
            </label>
            <label htmlFor="confirm_false" className='flex items-center flex-1 gap-3 px-3 py-1 bg-white border-2 border-white cursor-pointer hover:border-coklat-dark'>
              <input 
                type="radio" 
                id="confirm_false" 
                name="confirm_radio" 
                value="Tidak Hadir" 
                className='form-radio'
                checked={confirm === 'Tidak Hadir'} 
                onChange={ (e) => setConfirm(e.target.value)} required />
              <span>Tidak Hadir</span>
            </label>
          </div>
        </label>
        <div className="flex flex-col gap-1">
          <div className='text-sm'>Preview</div>
          <div className='flex items-start p-2 border-2 border-white border-dashed'>
            <div className="items-center justify-center hidden w-10 h-10 text-xl text-white lg:flex bg-coklat-dark drop-shadow-lg">{ name.trim().length > 0 ? name.trim().charAt(0).toUpperCase() : "?" }</div>
            <div className="relative flex-1 p-3 bg-white border-2 border-coklat-dark drop-shadow-lg">
              <div className="flex flex-col lg:gap-3 lg:items-center lg:flex-row">
                <div className="text-sm">{ name === '' ? '[Tulis Nama]' : name }</div>
                <div className="self-start px-2 text-xs text-white lg:self-auto bg-coklat-dark">{ confirm }</div>
              </div>
              <div className="mt-2 text-xs text-slate-400">sekarang</div>
              <div className="text-sm">{ message === '' ? '[Tulis Ucapan]' : message.trim() }</div>
              <span className='absolute top-0 right-0 p-2 text-white bg-red-400'>
                <FiTrash2 className='w-4 h-4'/>
              </span>
            </div>
            
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          {loadButton()}
        </div>
        
        {error && <div>Error! {error}</div>}
      </form>
    </div>
  )
}

export default MessageForm