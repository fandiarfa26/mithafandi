import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import invitees from '../../data/invitees';

const WelcomeForm = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inviteeData = invitees[code];
    if (!inviteeData) {
      alert('Kode undangan tidak tersedia!');
    } else {
      let nameUrl = inviteeData.name.split(' ').join('+');
      navigate(`/to/${code}-${nameUrl}`, {replace: false});
    }
    setCode("");
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
        <button type="submit" className="px-3 py-1 text-xs text-white lg:px-4 lg:py-2 lg:text-sm bg-coklat-dark hover:bg-ijo-dark">Masuk</button>
      </form>
    </div>
  )
}

export default WelcomeForm