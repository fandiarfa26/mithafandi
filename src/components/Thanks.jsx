import React from 'react'
import frameImg from '../assets/images/flower_frame_landscape.png'
import CoupleName from './CoupleName'

const Thanks = ({greet}) => {
  return (
    <div className='px-5 mt-10 lg:px-20 lg:mt-20'>
      <div className="flex flex-col items-center gap-5">
        <p className='text-sm text-center lg:text-base'>Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila {greet} berkenan hadir dan memberikan doa restu.</p>
        <p className='text-sm text-center lg:text-base'>Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.</p>
        <div className='text-center lg:text-xl font-bree'>Wassalamu'alaikum warahmatullahi wabarakatuh</div>
        <div className='relative mt-20 lg:scale-125 lg:p-10'>
          <img src="https://dummyimage.com/600x400/4d4d4d/fff" alt="mitha & fandi" className='w-72 lg:w-96' />
          <img src={frameImg} alt="frame" className='absolute inset-x-auto scale-125 -top-1 lg:top-8 w-96' />
        </div>
        <div className='mt-20 mb-10 text-xl text-center font-bree'>Kami yang berbahagia</div>
        <CoupleName/>
      </div>
    </div>
  )
}

export default Thanks