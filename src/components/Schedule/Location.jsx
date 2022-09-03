import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Location = () => {
  return (
    <div className='flex flex-col items-center'>
      <div data-aos="fade-up" className='mt-10 text-sm'>Bertempat di</div>
      <div data-aos="fade-up" className='mb-2 text-center'>Kediaman Mempelai Wanita</div>
      <div data-aos="fade-up" className="mb-5 text-sm text-center">Jl. Jeruk No. 25 Du'ur Langkap, Kec. Burneh, Kab. Bangkalan, Jawa Timur</div>
      <a data-aos="fade-up" href="https://maps.app.goo.gl/4YQw58aX4beDK29J8" target="_blank" rel='noreferrer' className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-coklat-dark hover:border-ijo-dark hover:bg-ijo-light">
        <HiOutlineLocationMarker className='w-4 h-4'/>
        <span>Lihat Lokasi</span>
      </a>
    </div>
  )
}

export default Location