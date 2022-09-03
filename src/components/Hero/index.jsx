import React from 'react'
import CoupleName from '../CoupleName'
import WeddingText from '../WeddingText'
import heroImage from '../../assets/images/hero.jpg'
import Countdown from '../Countdown'
import ScrollToBottom from './ScrollToBottom'
import MusicPlayer from './MusicPlayer'


const Hero = () => {
  return (
    <div id="hero" className='z-50 flex items-center justify-center w-full h-screen p-5 bg-fixed bg-opacity-50 bg-center bg-cover lg:px-0 bg-ijo-dark bg-blend-darken' style={{ backgroundImage: `url(${heroImage})`}}>
      <MusicPlayer />
      <div className="flex flex-col items-center w-full p-5 space-y-5 text-white bg-opacity-50 border-4 border-white shadow-2xl lg:p-10 lg:w-1/2 bg-slate-900 backdrop-blur-sm">
        <WeddingText/>
        <CoupleName />
        <div className="lg:pb-5 lg:text-xl lg:pt-10 font-bree">Kamis, 17 November 2022</div>
        <Countdown/>
      </div>
      <ScrollToBottom/>
    </div>
  )
}

export default Hero