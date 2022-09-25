import React from 'react'
import frameImg from '../assets/images/flower_frame_landscape.png'
import couplePhoto from '../assets/images/couple2.jpg'
import CoupleName from './CoupleName'

const Thanks = ({greet}) => {
  return (
    <div className='px-5 mt-10 lg:px-20 lg:mt-20'>
      <div className="flex flex-col items-center gap-5">
        <div>
          <p data-aos="fade-up" className='text-xs text-center lg:text-base'>Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila {greet} berkenan hadir dan memberikan doa restu.</p>
          <p data-aos="fade-up" className='text-xs text-center lg:text-base'>Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.</p>
        </div>
        
        <div data-aos="fade-up" className='text-center lg:text-xl font-bree'>Wassalamu'alaikum warahmatullahi wabarakatuh</div>
        <div data-aos="zoom-in" className='relative mt-20 lg:scale-125 lg:p-10'>
          <img src={couplePhoto} alt="mitha & fandi" className='w-72 lg:w-96' />
          <img src={frameImg} alt="frame" className='absolute inset-x-auto scale-125 -top-1 lg:top-8 w-96' />
        </div>
        <div className='mt-10 mb-5 text-center lg:mt-20 lg:mb-10 lg:text-xl font-bree'>Kami yang berbahagia</div>
        <CoupleName/>
      </div>
    </div>
  )
}

export default Thanks