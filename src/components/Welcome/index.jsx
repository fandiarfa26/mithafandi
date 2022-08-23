import React from 'react'
import Countdown from '../Countdown'
import WelcomeForm from './Form'
import IntroLayout from '../Intro/Layout'

const Welcome = () => {
  
  return (
    <IntroLayout>
      <Countdown />
      <WelcomeForm/>
    </IntroLayout>
  )
}

export default Welcome