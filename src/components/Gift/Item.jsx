import React from 'react'
import briImage from '../../assets/images/bri.png'
import {FiCopy} from 'react-icons/fi'

const GiftItem = (props) => {
  const handleCopy = () => {
    let text = props.number.replace(/\s/g, '')
    navigator.clipboard.writeText(text)
    alert('di-copy ke papan klip')
  }

  return (
    <div className='flex flex-col items-center flex-1 w-full gap-1'>
      
      <img data-aos="fade-up" src={briImage} alt="BRI" className='mb-5 w-28 lg:w-32' />
      <div data-aos="fade-up" className='text-sm'>No. Rekening</div>
      <div data-aos="fade-up" className='text-xl'>{props.number}</div>
      <div data-aos="fade-up" className="mb-3">a.n {props.name}</div>
      
      <button data-aos="fade-up" type="button" onClick={handleCopy} className='flex items-center gap-2 px-4 py-2 text-sm border-2 border-coklat-dark hover:border-ijo-dark hover:bg-ijo-light'>
        <FiCopy className='w-5 h-5'/>
        <span>Copy No. Rekening</span>
      </button>
    </div>
  )
}

export default GiftItem