import React from 'react'
import masker from '../../assets/images/face-mask.png'
import wash from '../../assets/images/wash-your-hands.png'
import thermo from '../../assets/images/thermometer.png'
import distance from '../../assets/images/social-distancing.png'
import ProtocolItem from './Item'

const Protocol = () => {
  return (
    <div className="py-10 overflow-hidden">
      <div className="px-10 py-5 scale-110 border-2 lg:px-32 bg-ijo-light border-ijo-dark drop-shadow-xl">
        <div className="text-lg text-center font-bree">Pemberitahuan</div>
        <div className="text-xs text-center">Tanpa mengurangi rasa hormat. Mohon hadir dengan tetap mematuhi protokol kesehatan pencegahan COVID-19.</div>
        <div className="flex flex-col items-center justify-center gap-6 mt-5 lg:flex-row">
          <ProtocolItem img={masker} label="Gunakan masker"/>
          <ProtocolItem img={wash} label="Mencuci tangan/ gunakan hand sanitizer"/>
          <ProtocolItem img={thermo} label="Suhu tubuh normal"/>
          <ProtocolItem img={distance} label="Menjaga jarak (min 1 meter)"/>
        </div>
      </div>
    </div>
  )
}

export default Protocol