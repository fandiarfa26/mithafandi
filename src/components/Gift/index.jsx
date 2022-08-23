import React from 'react'
import GiftItem from './Item'
import flower from '../../assets/images/flower2.png'

const Gift = () => {
  return (
    <div id="gift" className='px-5 py-10 lg:px-20'>
      <div className="w-full space-y-5">
        <div className='text-xl text-center font-bree'>Amplop Digital</div>
        <p className='text-sm text-center lg:text-base'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. <br/> Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
        <div className="flex flex-col items-start gap-5 py-5 lg:flex-row lg:gap-2">
          <GiftItem
            number='0006 0109 3069 500'
            name='Desy Rosmita Maharani'/>
          <img src={flower} alt="Flower" className='self-center h-28 lg:h-32' />
          <GiftItem
            number='0579 0100 7082 535'
            name='M. Fandi Arfabuma'/>
        </div>
      </div>
    </div>
  )
}

export default Gift