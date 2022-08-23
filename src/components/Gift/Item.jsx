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
      
      <img src={briImage} alt="BRI" className='h-28 lg:h-32 ' />
      <div className='text-sm'>No. Rekening</div>
      <div className='text-xl'>{props.number}</div>
      <div>a.n {props.name}</div>
      
      <button type="button" onClick={handleCopy} className='flex items-center gap-2 px-4 py-2 mt-3 text-sm border-2 border-transparent hover:border-coklat-dark'>
        <FiCopy className='w-5 h-5'/>
        <span>Copy No. Rekening</span>
      </button>
    </div>
  )
}

export default GiftItem