import React from 'react'
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi'

const ScheduleItem = (props) => {
  return (
    <div className='flex flex-col items-center flex-1 w-full'>
      <div className='mb-5 text-xl font-bree'>{props.title}</div>
      <div className='flex items-start gap-2'>
        <HiOutlineCalendar className='w-5 h-5 mt-1'/>
        <span>{props.date}</span>
      </div>
      <div className='flex items-start gap-2'>
        <HiOutlineClock className='w-5 h-5 mt-1'/>
        <span>{props.time}</span>
      </div>
    </div>
  )
}

export default ScheduleItem