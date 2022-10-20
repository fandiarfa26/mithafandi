import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';

import db from '../../firebase';

const WelcomeForm = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const inviteeSnapshot = await getDoc(doc(db, "invitees", code));
      if (!inviteeSnapshot.exists()) {
        alert('Kode undangan tidak tersedia!');
      } else {
        let theName = inviteeSnapshot.data().name;
        let nameUrl = theName.split(' ').join('+');
        navigate(`/to/${code}-${nameUrl}`, {replace: false});
      }
      setLoading(false);
      setCode("");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    setLoading(false);
  }

  const loadBtn = () => {
    if (loading) {
      return <button type="button" className="px-3 py-1 text-xs text-white lg:px-4 lg:py-2 lg:text-sm bg-ijo-dark">Tunggu...</button>
    } 
    return <button type="submit" className="px-3 py-1 text-xs text-white lg:px-4 lg:py-2 lg:text-sm bg-coklat-dark hover:bg-ijo-dark">Masuk</button>
  }

  return (
    <div className='w-full mt-5 lg:mt-8 lg:w-1/2'>
      <div className='mb-2 text-xs text-center lg:text-base'>Masukkan kode undangan</div>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <label htmlFor="code" className='flex-1'>
          <input 
            type="text"
            id="code"
            maxLength={4}
            placeholder="_ _ _ _"
            className='w-full px-3 py-1 text-center uppercase bg-white border-2 lg:text-2xl border-slate-300 focus:outline-coklat-dark'
            required
            value={code}
            onChange={ e => setCode(e.target.value.toLowerCase()) } />
        </label>
        {loadBtn()}
      </form>
    </div>
  )
}

export default WelcomeForm