import React from 'react'
import CoupleName from '../CoupleName'
import SideText from '../SideText'
import WeddingText from '../WeddingText'
import bgFlower from '../../assets/images/bg_flower2.jpg'
import flower7 from '../../assets/images/flower7.png'
import IntroPhoto from './Photo'

const IntroLayout = (props) => {
  return (
    <div>
      <div className="fixed">
        <SideText/>
      </div>
      <div className='w-screen bg-fixed bg-center bg-cover lg:h-screen' style={{ backgroundImage: `url(${bgFlower})`}}>
        <div className='flex flex-col items-center justify-center px-3 pb-10 pt-36 lg:p-0 lg:flex-row bg-opacity-70 bg-ijo-dark'>
          <IntroPhoto/>
          <div className='flex flex-col items-center justify-center w-full px-5 pb-10 bg-white pt-28 lg:pt-0 lg:pb-0 lg:h-screen lg:w-1/2'>
            <WeddingText/>
            <CoupleName />
            <img src={flower7} alt="flower7" className="my-5 h-28 lg:h-32" />
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroLayout