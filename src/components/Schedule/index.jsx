import React from 'react'
import flower4 from '../../assets/images/flower4.png'
import ScheduleItem from './Item'
import Location from './Location'
import bgFlower from '../../assets/images/bg_flower2.jpg'

const Schedule = () => {
  return (
    <div id="schedule" className='relative flex justify-center w-full lg:py-10 lg:px-20'>
        <div className='w-full bg-fixed bg-center bg-cover border-4 border-white drop-shadow-xl' style={{ backgroundImage: `url(${bgFlower})`}}>
          <div className='p-5 lg:p-10 bg-coklat-light bg-opacity-80'>
            <div className="flex flex-col items-start gap-10 lg:flex-row">
              <ScheduleItem 
                title="Akad Nikah" 
                date="Kamis, 17 November 2022"
                time="Pukul 08.00 WIB - selesai" />
              <ScheduleItem 
                title="Resepsi" 
                date="Kamis, 17 November 2022"
                time="Pukul 14.00 WIB - selesai" />
            </div>
            <Location/>
          </div>
        </div>
        <img src={flower4} alt="Flower4" className='absolute -top-16 h-36 lg:h-48 lg:top-20 -left-20 lg:-left-10 lg:-rotate-12' />
      </div>
  )
}

export default Schedule