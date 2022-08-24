import React from 'react'
import {HiOutlineCalendar, HiOutlineChat, HiOutlineHeart, HiOutlineHome, HiOutlineMail} from 'react-icons/hi'
import ScrollIntoView from 'react-scroll-into-view'

const MenuLinks = () => {
  const menus = [
    {
      icon: HiOutlineHome,
      label: 'Kembali ke atas',
      to: '#hero'
    },
    {
      icon: HiOutlineHeart,
      label: 'Mempelai',
      to: '#bio'
    },
    {
      icon: HiOutlineCalendar,
      label: 'Acara',
      to: '#schedule'
    },
    {
      icon: HiOutlineMail,
      label: 'Amplop',
      to: '#gift'
    },
    {
      icon: HiOutlineChat,
      label: 'Ucapan',
      to: '#messages'
    },
  ];
  return (
    
      <div className='flex items-end lg:h-screen lg:sticky lg:top-0'>
        <div className='flex flex-row items-center justify-center w-screen gap-5 p-3 border-2 bg-ijo-light border-ijo-dark bg-opacity-90 lg:gap-3 lg:flex-col lg:border-none lg:w-auto lg:h-screen lg:bg-transparent'>
          <div className='flex-1 border border-dashed border-slate-900'></div>
            {
              menus.map((item, i) => (
                <ScrollIntoView key={i} selector={item.to} className='p-2 border-2 border-white rounded-full cursor-pointer hover:bg-ijo-light' title={item.title}>
                  <item.icon className='w-5 h-5'/>
                </ScrollIntoView>
              ))
            } 
          <div className='flex-1 border border-dashed border-slate-900'></div>
        </div>
        
      </div>
  )
}

export default MenuLinks