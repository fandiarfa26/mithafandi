import React from 'react'
import GiftItem from './Item'
import flower from '../../assets/images/flower2.png'

const Gift = () => {
  return (
    <div id="gift" className='px-5 py-10 lg:px-20'>
      <div className="flex flex-col items-center gap-5">
        <div data-aos="fade-up" className='text-xl text-center font-bree'>Amplop Digital</div>
        <p data-aos="fade-up" className='text-xs text-center lg:text-base lg:w-3/4'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
        <div className="flex flex-col items-start w-full gap-5 py-5 lg:flex-row lg:gap-2">
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