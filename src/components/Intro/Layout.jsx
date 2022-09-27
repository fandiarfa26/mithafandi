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
        <div className='flex flex-col items-center justify-center h-screen px-3 pb-3 lg:p-0 lg:flex-row bg-opacity-70 bg-ijo-dark'>
          <IntroPhoto/>
          <div className='flex flex-col items-center justify-center w-full px-5 pt-10 pb-5 bg-white lg:pt-0 lg:pb-0 lg:h-screen lg:w-1/2'>
            <WeddingText/>
            <CoupleName from={props.from} />
            <img src={flower7} alt="flower7" className="hidden h-10 my-3 lg:my-5 lg:h-32 lg:block" />
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroLayout