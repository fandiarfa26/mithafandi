import React from 'react'
import flower from '../../assets/images/flower3.png'
import BioItem from './Item'

const Bio = ({greet}) => {
  return (
    <div id="bio" className='px-5 pb-10 lg:px-20'>
      <div className="flex flex-col items-center gap-5">
        <div className='text-xl text-center'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
        <div className='text-sm text-center lg:text-xl font-bree'>Assalamu'alaikum warahmatullahi wabarakatuh</div>
        <p className='text-xs text-center lg:text-base lg:w-3/4'>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Kami mengundang {greet} untuk menghadiri acara pernikahan kami.</p>
        <div className="flex flex-col items-start w-full gap-5 py-5 lg:flex-row">
          <BioItem 
            pic="https://dummyimage.com/500/4d4d4d/fff"
            name="Desy Rosmita Maharani, S.Pd."
            childof="Putri ketiga dari"
            parent="Bapak Maharani Kahar & Ibu St. Rumiyati"
            instagram="dsyrsmitam"/>
          <img src={flower} alt="Flower" className='self-center h-28 lg:h-32' />
          <BioItem 
            pic="https://dummyimage.com/500/4d4d4d/fff"
            name="M. Fandi Arfabuma, S.T."
            childof="Putra pertama dari"
            parent="Bapak Suhardi & Ibu Latifah"
            instagram="fandiarfa"/>
        </div>
      </div>
    </div>
  )
}

export default Bio