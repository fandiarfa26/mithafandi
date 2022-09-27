import React from 'react'
import IntroLayout from '../Intro/Layout'

const Front = ({invitee, setOpen}) => {
  return (
    <IntroLayout from={invitee.from}>
      <div className='mb-3 text-xs text-center lg:text-base'>Kepada Yth. {invitee.greet}</div>
      <div className='flex items-center justify-center w-full p-3 text-sm border-2 lg:p-5 lg:text-lg lg:w-1/2 border-slate-300'>{invitee.name}</div>
      <div className="my-3 text-xs text-center">Kami mengundang Anda untuk hadir di acara pernikahan kami</div>
      <button type="button" className="px-4 py-2 text-sm text-white bg-coklat-dark hover:bg-ijo-dark" onClick={() => setOpen(true)}>Buka Undangan</button>
    </IntroLayout>
  )
}

export default Front