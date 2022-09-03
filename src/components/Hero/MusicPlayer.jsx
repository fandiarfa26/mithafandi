import React, {useEffect, useState, useRef, useCallback} from 'react'
import {TbMusic,  TbMusicOff} from 'react-icons/tb'
import audioSrc from '../../assets/audio/perfect-piano.mp3'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef(new Audio(audioSrc))

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  useEffect(() => {
    handlePlay()
  }, [handlePlay])

  return (
    <div className='absolute inset-x-0 top-0 flex flex-col items-center justify-center'>
      <div className="py-2 bg-white border border-white"></div>
      <div  onClick={() => setIsPlaying(!isPlaying)} className='flex items-center gap-2 p-2 text-white border-2 border-white cursor-pointer backdrop-blur-sm hover:bg-ijo-light hover:border-ijo-dark hover:text-slate-900'>
        {
          isPlaying ? <TbMusic className="w-5 h-5"/> : <TbMusicOff className="w-5 h-5"/>
        }
        
        <span className='text-xs'>Tekan untuk { isPlaying ? 'mematikan' : 'menyalakan'}</span>
      </div>
    </div>
  )
}

export default MusicPlayer