import React from 'react'
import IntroLayout from '../Intro/Layout'

const Front = ({invitee, setOpen}) => {
  return (
    <IntroLayout>
      <div className='mb-3 text-center'>Kepada Yth. {invitee.greet}</div>
      <div className='flex items-center justify-center w-full p-5 text-lg border-2 lg:w-1/2 border-slate-300'>{invitee.name}</div>
      <div className="my-3 text-xs text-center">Kami mengundang Anda untuk hadir di acara pernikahan kami</div>
      <button type="button" className="px-4 py-2 text-sm text-white bg-coklat-dark hover:bg-ijo-dark" onClick={() => setOpen(true)}>Buka Undangan</button>
    </IntroLayout>
  )
}

export default Front